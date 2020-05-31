import path from 'path';
import fs from 'fs-extra';

import { testMetadata } from 'teamcity-service-messages';
import { findSuitesAndTests } from 'mocha-list-tests';

const testsDir = path.join(__dirname, 'integration');
const videosDir = path.join(__dirname, 'videos');
const screensDir = path.join(__dirname, 'screenshots');

let prevFoundTests: string[] = [];
function getTests(fileName: string) {
  const { tests } = findSuitesAndTests(path.join(testsDir, fileName));
  const newTests = tests.filter((test: string) => !prevFoundTests.includes(test));
  prevFoundTests = tests;
  return newTests.map((test: string) => test.split(/\./));
}

const fullTestName = (suite: string, testName: string) => `${suite}: ${testName}`;

async function report() {
  const hookFailures: { [file: string]: [string, string][] } = {};
  const reports: any[] = [];
  try {
    const testFiles = await fs.readdir(screensDir);
    await Promise.all(
      testFiles.map(async (testFile) => {
        const files = await fs.readdir(path.join(screensDir, testFile));
        files.forEach((file) => {
          const match = file.match(/^(.*) \(failed\).png$/);
          if (match == null) {
            return;
          }

          const [suite, test, hookPart] = match[1].split(' -- ');
          let testName = test;
          const hook = hookPart?.match(/^(.*) hook$/)?.[1];
          if (hook != null) {
            testName = `"${hook}" hook for "${test}"`;
            hookFailures[testFile] = hookFailures[testFile] || [];
            hookFailures[testFile].push([suite, testName]);
          }
          reports.push({
            name: 'Screenshot',
            testName: fullTestName(suite, testName),
            type: 'image',
            value: `screenshots.tar.gz!${testFile}/${file}`,
          });
        });
      })
    );
  } catch (e) {
    // ignore
  }

  const videoFiles = await fs.readdir(videosDir);
  videoFiles.forEach((videoFile) => {
    const testFile = videoFile.replace(/\.mp4$/, '');
    const tests = [...getTests(testFile), ...(hookFailures[testFile] || [])];
    tests.forEach(([suite, testName]) =>
      reports.unshift({
        name: 'Video',
        testName: fullTestName(suite, testName),
        type: 'video',
        value: `videos.tar.gz!${videoFile}`,
      })
    );
  });

  reports.forEach(testMetadata);
}

report();
