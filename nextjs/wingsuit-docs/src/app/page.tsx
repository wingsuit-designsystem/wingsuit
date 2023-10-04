import { getStorage, IPatternDefinition } from '@wingsuit-designsystem/pattern';

// eslint-disable-next-line import/no-unresolved
import 'protons';
// eslint-disable-next-line import/no-unresolved
import 'organisms/download';
// eslint-disable-next-line import/no-unresolved
import 'molecules/hero';
// eslint-disable-next-line import/no-unresolved
import 'molecules/tabs';
// eslint-disable-next-line import/no-unresolved
import 'organisms/section-code';
// eslint-disable-next-line import/no-unresolved
import 'organisms/section';
// eslint-disable-next-line import/no-unresolved
import 'templates/page';

// @ts-ignore
import 'templates/page';
import pageTemplate from 'templates/page/page.twig';
import WingsuitPattern from '@/component/wingsuit-pattern';

const tokens = require('./tokens.yml');
const component = require('./component.yml');
const love = require('./love.yml');
const document = require('./document.yml');

export const metadata = {
  title: 'Build Twig Components in Storybook',
  description:
    'A modern way of building, maintaining and documenting your visual driven twig components in storybook.',
};
const pattern: IPatternDefinition = {
  label: 'Homepage',
  id: 'frontpage',
  template: pageTemplate,
  extends: ['page'],
  fields: {
    content: {
      preview: [
        { id: 'hero' },
        {
          id: 'section_code',
          fields: tokens,
        },
        {
          id: 'section_code',
          fields: component,
        },
        {
          id: 'section_code',
          fields: document,
        },
        {
          id: 'section_code',
          fields: love,
        },
        {
          id: 'download',
        },
      ],
    },
  },
};

const storage = getStorage();
storage.addDefinition('frontpage', pattern);
export default function Page() {
  return (
    <>
      <WingsuitPattern patternId="frontpage" />
    </>
  );
}
