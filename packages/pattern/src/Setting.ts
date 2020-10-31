import Property from './Property';
import { Options } from './definition';

export default class Setting extends Property {
  public getOptions(): Options {
    return this.options;
  }

  public setOptions(options: Options) {
    this.options = options;
  }

  public getOptionKeyByLabel(label): string {
    let optionKey = '';
    Object.keys(this.options).forEach((key) => {
      if (this.options[key] === label) {
        optionKey = key;
      }
    });
    return optionKey;
  }

  public getPreviewDisplayValue(): string {
    if (this.getType() === 'select' && this.getPreview() != null && this.getPreview() !== '') {
      return this.options[this.getPreview()];
    }
    return this.getPreview();
  }

  public getDefaultValue() {
    return this.defaultValue;
  }

  public setDefaultValue(defaultValue: string) {
    this.defaultValue = defaultValue;
  }

  public isRequired(): boolean {
    return this.required;
  }

  public setRequired(required: boolean) {
    this.required = required;
  }

  private defaultValue = '';

  private required = false;

  private options: Options = {};
}
