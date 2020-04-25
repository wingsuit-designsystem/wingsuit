import Field from "./Field";
import Setting from "./Setting";
import Pattern from "./Pattern";

export default class PatternVariant {
  get use(): string {
    return this._use;
  }

  get label(): string {
    return this._label;
  }

  get description(): string {
    return this._description;
  }

  get pattern(): Pattern {
    return this._pattern;
  }

  set pattern(pattern: Pattern) {
    this._pattern = pattern;
  }

  get variant(): string {
    return this._variant;
  }

  set variant(value: string) {
    this._variant = value;
  }

  get fields(): Field[] {
    return this._fields;
  }

  public addField(field: Field) {
    this._fields[field.name] = field;
  }

  public getField(name: string) {
    return this._fields[name];
  }

  set fields(fields: Field[]) {
    this._fields = fields;
  }

  get settings(): Setting[] {
    return this._settings;
  }

  set settings(value: Setting[]) {
    this._settings = value;
  }

  public getSetting(name: string) {
    return this._settings[name];
  }

  public addSetting(setting: Setting) {
    const name = setting.name;
    this._settings[name] = setting;
  }

  public getVariables() {
    const values = {};
    Object.keys(this.settings).forEach((key) => {
      values[key] = this.settings[key].preview;
    });
    Object.keys(this.fields).forEach((key) => {
      const field: Field = this.fields[key];
      values[key] = field.preview;
    });

    if (this.variant !== Pattern.DEFAULT_VARIANT_NAME) {
      values['variant'] = this.variant;
    }
    return values;
  }

  private _pattern: Pattern;
  private _use: string;
  private _variant: string;
  private _label: string;
  private _description: string;
  private _fields: Field[] = [];
  private _settings: Setting[] = [];

  constructor(pattern: Pattern, variant: string, use: string, label: string, description: string) {
    this._pattern = pattern;
    this._variant = variant;
    this._label = label;
    this._use = use;
    this._description = description;
  }
}
