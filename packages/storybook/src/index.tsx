import React from 'react';
import { storage, renderer, Pattern, IRenderer } from '@wingsuit-designsystem/pattern';
import { configure as storybookConfigure, storiesOf } from '@storybook/react';
import { Title, Subtitle, DocsStory, ArgsTable, CURRENT_SELECTION } from '@storybook/addon-docs';
import TwigAttribute from '@wingsuit-designsystem/pattern/dist/TwigAttribute';
import '@storybook/addon-docs/register';
import twig from 'react-syntax-highlighter/dist/cjs/languages/prism/markup';
import { PrismLight as ReactSyntaxHighlighter } from 'react-syntax-highlighter';

import { PatternPreview } from '@wingsuit-designsystem/pattern-react/client';
import PatternProperties from './docs/PatternProperties';
import { PatternDoc } from './docs/PatternDoc';
import { PatternInclude } from './docs/PatternInclude';

ReactSyntaxHighlighter.registerLanguage('twig', twig);
export interface PatternEvents {
  alterPattern: (pattern:Pattern) => Pattern;
  alterStory: (story:any) => any;
}
function getStorybookControlsOptions(setting) {
  const options: {} = setting.getOptions();
  let controls = {};

  if (setting.isRequired() === false) {
    controls = {
      '': 'Empty' ,
    };
  }
  Object.keys(options).forEach((key) => {
    controls[key] = options[key];
  });
  return controls;
}

export function configure(
  module: NodeModule,
  storybookContext,
  dataContext,
  templateContext,
  namespaces,
  renderImpl: IRenderer | null,
  events: PatternEvents | null
) {
  storage.setNamespaces(namespaces);
  storage.createDefinitionsFromMultiContext(storybookContext);
  storage.createTwigStorageFromContext(templateContext);
  storage.createGlobalsFromContext(dataContext);
  if (renderImpl != null) {
    renderer.setRenderer(renderImpl);
  }
  renderer.initializeRenderer();
  const stories:any = [];
  storybookConfigure(() => {

    // Load stories from wingusit.yml.
    const patternIds = storage.getPatternIds();
    patternIds.forEach((patternId) => {
      let pattern = storage.loadPattern(patternId);
      if (events !== null) {
        pattern = events.alterPattern(pattern);
      }
      if (pattern!== null && pattern.isVisible('storybook')) {
        stories.push(getStories(pattern, module));
      }
    });

    // Load stories form storybook app.
    const allExports: any = [];
    if (Array.isArray(storybookContext) === false) {
      storybookContext.keys().forEach((key) => {
        const storyContext = storybookContext(key);
        if (storyContext.default !== null) {
          if (events !== null) {
            storyContext.default = events.alterStory(storybookContext(key).default);
          }
          if (storyContext.default !== null) {
            allExports.push(storyContext);
          }
        }
      });
    } else {
      storybookContext.forEach((innerContext) => {
        innerContext.keys().forEach((key) => {
          const storyContext = innerContext(key)
          if (storyContext.default != null) {
            if (events !== null) {
              storyContext.default = events.alterStory(storyContext.default);
            }
            if (storyContext.default !== null) {
              allExports.push(storyContext);
            }
          }
        });
      });
    }
    return allExports;
  }, module);
}
function getArgs(defaultArgs, variant) {
  const fields = variant.getFields();
  const resultArgs = { ...defaultArgs };
  const settings = variant.getSettings();
  Object.keys(settings).forEach((key) => {
    if (settings[key].getType() === 'attributes') {
      resultArgs[key] = new TwigAttribute(resultArgs[key]);
    }
  });
  Object.keys(fields).forEach((key) => {
    const field = fields[key];
    if (field.getType() === 'pattern') {
      if (resultArgs[key] === false) {
        resultArgs[key] = null;
      } else {
        delete resultArgs[key];
      }
    }
  });
  return resultArgs;
}
function getArgTypes(variant) {
  const argTypes: any = {};
  let hasSettings = false;

  Object.keys(variant.getSettings()).forEach((key) => {
    const setting = variant.getSetting(key);

    if (setting.isEnable() && setting.getType() !== 'group'
      && setting.getType() !== 'media') {
      hasSettings = true;
      argTypes[key] = {
        name: key,
        type: {
          type: 'string',
          required: setting.isRequired(),
        },
        table: {
          defaultValue: { summary: setting.getPreview() },
          category: 'Settings',
        },
        defaultValue: setting.getDefaultValue(),
        description: `${setting.getLabel()} ${
          setting.getDescription() !== '' ? ` - ${setting.getDescription()}` : ''
        }`,
      };
      if (
        setting.getType() === 'select' ||
        setting.getType() === 'radios' ||
        setting.getType() === 'colorwidget'
      ) {
        argTypes[key].type.name = 'enum';
        argTypes[key].description += `<br>Option keys: ${Object.keys(setting.getOptions()).join(
          ', '
        )}`;
        argTypes[key].options = Object.keys(getStorybookControlsOptions(setting));
        argTypes[key].control = {
          labels: getStorybookControlsOptions(setting),
          type: setting.getType() === 'radio' ? 'radio' : 'select',
        };
      } else if (setting.getType() === 'boolean') {
        argTypes[key].type.name = 'boolean';
        argTypes[key].control = {
          type: 'boolean',
        };
      } else if (setting.getType() === 'number') {
        argTypes[key].type.name = 'number';
        argTypes[key].control = {
          type: 'number',
        };
      } else {
        argTypes[key].type.name = 'string';
        argTypes[key].control = {
          type: 'text',
        };
      }
    }
  });
  if (!hasSettings) {
    delete argTypes.SETTINGS;
  } else {
    argTypes.SEP = {
      type: 'string',
      name: '',
      table: {
        defaultValue: { summary: null },
      },
      control: null,
    };
  }

  let hasFields = false;
  Object.keys(variant.getFields()).forEach((key) => {
    const field = variant.getField(key);
    if (field.isEnable()) {
      hasFields = true;
      argTypes[key] = {
        name: key,
        table: {
          category: 'Fields',
        },
        type: {
          required: false,
        },
        defaultValue: field.getPreview(),
        description: `${field.getLabel()} ${
          field.getDescription() !== '' ? ` - ${field.getDescription()}` : ''
        }`,
      };
      if (field.getType() === 'object') {
        argTypes[key].type.name = 'object';
        argTypes[key].control = {
          type: 'object',
        };
      } else if (field.getType() === 'pattern' || field.getType() === 'media') {
        argTypes[key].type.name = 'boolean';
        argTypes[key].defaultValue = true;
        argTypes[key].control = {
          type: 'boolean',
        };
      } else {
        argTypes[key].type.name = 'string';
        argTypes[key].control = {
          type: 'text',
        };
      }
    }
  });
  if (hasFields) {
    delete argTypes.FIELDS;
    delete argTypes.SEP;
  }
  return argTypes;
}

function getStories(pattern: Pattern, module) {
  const patternLabel = `${pattern.getNamespace()}/${pattern.getLabel()}`;
  const story = storiesOf(patternLabel, module);

  Object.keys(pattern.getPatternVariants()).forEach((variantKey) => {
    const variant = pattern.getVariant(variantKey);
    const argTypes = getArgTypes(variant);
    const twigFile = storage.findTwigById(variant.getPattern().getId());
    let parameters = {
      argTypes,
      docs: {
        source: {
          code: twigFile.default,
        },
        page: () => (
          <>
            <Title />
            <Subtitle>
              <div dangerouslySetInnerHTML={{ __html: pattern.getDescription() }} />
            </Subtitle>
            <DocsStory id={variant.getStoryId()} />
            <ArgsTable story={CURRENT_SELECTION} />
            <PatternInclude variant={variant} />
          </>
        ),

        storyDescription: variant.getDescription(),
      },
    };
    parameters = Object.assign(parameters, pattern.getParameters());

    story.add(
      variant.getLabel(),
      (args) => {
        const vars = getArgs(args, variant);
        return <PatternPreview patternId={pattern.getId()} variantId={variantKey} {...vars} />;
      },
      parameters
    );
  });
  return story;
}

export { drupalAttachBehaviorDecorator } from './drupal';
export {
  isInitDecorator,
  initDecorator,
  initJsBehaviors,
  attachBehaviorDecorator,
} from '@wingsuit-designsystem/pattern-react/client';
export { RenderTwig, PatternPreview } from '@wingsuit-designsystem/pattern-react/client';
export { default as PatternLoad } from './docs/PatternLoad';
export { default as Spacing } from './docs/Spacing';
export { default as Typeset } from './docs/Typeset';
export { PatternDoc, PatternProperties, PatternInclude };
