import { randParagraph, randWord, randSentence, randLine, seed } from '@ngneat/falso';
import PatternVariant from './PatternVariant';

export default class Property {
  public getDescription(): string {
    if (this.description === undefined) {
      return '';
    }
    return this.description;
  }

  public isEnable(): boolean {
    return this.enable;
  }

  public setEnable(value: boolean) {
    this.enable = value;
  }

  public setDescription(value: string) {
    this.description = value;
  }

  private generateFake(_preview) {
    let token = 'lorem.word';

    if (_preview.token == null && _preview.property != null) {
      token = _preview.property;
    }
    if (_preview.token != null) {
      token = _preview.token;
    }
    const fakeOptions = _preview.options ?? {};

    if (typeof _preview === 'string') {
      token = _preview;
    }
    try {
      if (process.env.STORYBOOK_WINGSUIT_FAKER_SEED != null) {
        if (!Number.isNaN(process.env.STORYBOOK_WINGSUIT_FAKER_SEED)) {
          seed(process.env.STORYBOOK_WINGSUIT_FAKER_SEED);
        } else {
          console.error('STORYBOOK_WINGSUIT_FAKER_SEED must be numeric');
        }
      }
      const tokens = {
        'lorem.word': randWord,
        'lorem.sentence': randSentence,
        'lorem.paragraph': randParagraph,
        'lorem.paragraphs': randParagraph,
        'lorem.line': randLine,
      };
      if (!tokens[token]) {
        return `Invalid faker token: ${token}. Valid tokens are: ${Object.keys(tokens).join(', ')}`;
      }
      const result = tokens[token](fakeOptions);

      return Array.isArray(result) ? result.join(' ') : result;
    } catch (e) {
      if (e instanceof Error) {
        return `Invalid faker configuration "${token}". ${e.message}`;
      }
      return '';
    }
  }

  private cleanString(input) {
    let output = '';
    for (let i = 0; i < input.length; i += 1) {
      if (
        input.charCodeAt(i) <= 127 ||
        (input.charCodeAt(i) >= 160 && input.charCodeAt(i) <= 255)
      ) {
        output += input.charAt(i);
      }
    }
    return output;
  }

  public getPreview(): any {
    if (typeof this.preview === 'object') {
      if (this.preview?.faker != null) {
        return this.generateFake(this.preview.faker);
      }
      if (this.type === 'pattern' || this.type === 'object' || this.type === 'media_library') {
        return this.preview;
      }
      if (this.preview?.ref != null) {
        return this.variant.getSetting(this.preview?.ref)?.getPreview();
      }
      return JSON.stringify(this.preview);
    }
    let value = this.preview;
    if (typeof value === 'string' || value instanceof String) {
      value = this.cleanString(value);
    }
    return value;
  }

  public setPreview(value: any | undefined) {
    this.preview = value;
  }

  public getLabel(): string {
    return this.label;
  }

  public setLabel(value: string) {
    this.label = value;
  }

  public getName(): string {
    return this.name;
  }

  public setName(value: string) {
    this.name = value;
  }

  public getType(): string {
    return this.type;
  }

  public setType(value: string) {
    this.type = value;
  }

  private name: string;

  private type: string;

  private label: string;

  private description: string;

  private preview: any;

  private enable = true;

  protected variant: PatternVariant;

  constructor(
    name: string,
    type: string,
    label: string,
    description: string,
    preview: any,
    variant: PatternVariant
  ) {
    this.name = name;
    this.type = type;
    this.label = label;
    this.description = description;
    this.preview = preview;
    this.variant = variant;
  }
}
