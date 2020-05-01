import Property from './Property';

export default class Setting extends Property {
  public getOptions(): string[] {
    return this.options;
  }

  public setOptions(value: string[]) {
    this.options = value;
  }

  public isRequired(): boolean {
    return this.required;
  }

  public setRequired(required: boolean) {
    this.required = required;
  }

  public isEnable(): boolean {
    return this.enable;
  }

  public setEnable(value: boolean) {
    this.enable = value;
  }

  private required = false;

  private enable = true;

  private options: string[] = [];
}
