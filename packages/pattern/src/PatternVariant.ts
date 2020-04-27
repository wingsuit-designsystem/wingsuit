import Field from './Field';
import Setting from './Setting';
import Pattern from './Pattern';

export default class PatternVariant {
  public getUse(): string {
    return this.use;
  }

  public getLabel(): string {
    return this.label;
  }

  public getDescription(): string {
    return this.description;
  }

  public getPattern(): Pattern {
    return this.pattern;
  }

  public setPattern(pattern: Pattern) {
    this.pattern = pattern;
  }

  public getVariant(): string {
    return this.variant;
  }

  public setVariant(value: string) {
    this.variant = value;
  }

  public getFields(): Field[] {
    return this.fields;
  }

  public addField(field: Field) {
    this.fields[field.getName()] = field;
  }

  public getField(name: string) {
    return this.fields[name];
  }

  public setFields(fields: Field[]) {
    this.fields = fields;
  }

  public getSettings(): Setting[] {
    return this.settings;
  }

  public setSettings(value: Setting[]) {
    this.settings = value;
  }

  public getSetting(name: string) {
    return this.settings[name];
  }

  public addSetting(setting: Setting) {
    this.settings[setting.getName()] = setting;
  }

  public getVariables() {
    const values = {};
    Object.keys(this.settings).forEach((key) => {
      values[key] = this.settings[key].preview;
    });
    Object.keys(this.fields).forEach((key) => {
      const field: Field = this.fields[key];
      values[key] = field.getPreview();
    });

    if (this.variant !== Pattern.DEFAULT_VARIANT_NAME) {
      // eslint-disable-next-line dot-notation
      values['variant'] = this.variant;
    }
    return values;
  }

  private pattern: Pattern;

  private use: string;

  private variant: string;

  private label: string;

  private description: string;

  private fields: Field[] = [];

  private settings: Setting[] = [];

  constructor(pattern: Pattern, variant: string, use: string, label: string, description: string) {
    this.pattern = pattern;
    this.variant = variant;
    this.label = label;
    this.use = use;
    this.description = description;
  }
}
