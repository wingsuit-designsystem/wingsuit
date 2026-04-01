#!/usr/bin/env node

/* eslint-disable no-console */
const path = require('path');
const fs = require('fs');
const { spawnSync } = require('child_process');
const http = require('http');
const sirv = require('sirv');

const rootDir = path.resolve(__dirname, '..');
const buildDir = path.join(rootDir, 'built-storybooks');
const port = Number(process.env.STORYBOOK_PORT || 4000);

const ensureBuiltStorybooks = () => {
  if (fs.existsSync(buildDir)) {
    return;
  }

  console.log(`[serve-storybooks] "${buildDir}" not found, building storybooks...`);
  const result = spawnSync('yarn', ['build-storybooks'], { stdio: 'inherit', cwd: rootDir });
  if (result.status !== 0) {
    console.error('[serve-storybooks] Failed to build storybooks');
    process.exit(result.status || 1);
  }
};

const startServer = () => {
  const serve = sirv(buildDir, {
    dev: true,
    etag: true,
    maxAge: 0,
    immutable: false,
    single: false,
  });

  const server = http.createServer((req, res) => serve(req, res));

  server.on('error', (err) => {
    console.error('[serve-storybooks] Failed to start server:', err.message);
    process.exit(1);
  });

  server.listen(port, '0.0.0.0', () => {
    console.log(`[serve-storybooks] Serving ${buildDir} at http://localhost:${port}`);
  });
};

ensureBuiltStorybooks();
startServer();
