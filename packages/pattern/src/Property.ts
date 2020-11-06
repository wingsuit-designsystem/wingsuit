import { Preview } from './definition';

const faker = require('faker');

export default class Property {
  public getDescription(): string {
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
      return faker.fake(token);
    } catch (e) {
      return `Invalid faker configuration "${token}". ${e.message}`;
    }
  }

  public getPreview(): any {
    if (typeof this.preview === 'object') {
      if (this.preview.faker != null) {
        return this.generateFake(this.preview.faker);
      }
      if (this.type === 'pattern' || this.type === 'object') {
        return this.preview;
      }
      return JSON.stringify(this.preview);
    }
    return this.preview;
  }

  public setPreview(value: Preview | string) {
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
