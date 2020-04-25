import Property from './Property';

export default class Setting extends Property {
  public getOptions(): string[] {
    return this.options;
  }

  public setOptions(value: string[]) {
    this.options = value;
  }

  public getEnable(): boolean {
    return this.enable;
  }

  public setEnable(value: boolean) {
    this.enable = value;
  }

  private enable = true;

  private options: string[] = [];
}
