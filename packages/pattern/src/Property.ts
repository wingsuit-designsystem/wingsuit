const faker = require('faker');

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
      token = `{{${_preview.property}}}`;
    }
    if (_preview.token != null) {
      token = _preview.token;
    }
    if (typeof _preview === 'string') {
      token = `{{${_preview}}}`;
    }
    try {
      if (process.env.STORYBOOK_WINGSUIT_FAKER_SEED != null) {
        if (!Number.isNaN(process.env.STORYBOOK_WINGSUIT_FAKER_SEED)) {
          faker.seed(parseInt(process.env.STORYBOOK_WINGSUIT_FAKER_SEED, 10));
        } else {
          console.error('STORYBOOK_WINGSUIT_FAKER_SEED must be numeric');
        }
      }
      return faker.fake(token);
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

  constructor(name: string, type: string, label: string, description: string, preview: any) {
    this.name = name;
    this.type = type;
    this.label = label;
    this.description = description;
    this.preview = preview;
  }
}
