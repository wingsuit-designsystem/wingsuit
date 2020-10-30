import Property from './Property';

export default class Setting extends Property {
  public getOptions(): string[] {
    return this.options;
  }

  public setOptions(value: string[]) {
    this.options = value;
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

  private options: string[] = [];
}
