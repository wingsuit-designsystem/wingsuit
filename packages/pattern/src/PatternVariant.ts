import Field from './Field';
import Setting from './Setting';
import Pattern from './Pattern';
import IPatternStorage from './IPatternStorage';
import TwigAttribute from './TwigAttribute';

export default class PatternVariant {
  public getUse(): string {
    return this.use;
  }

  public getStorage(): IPatternStorage {
    return this.pattern.getStorage();
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

  public getField(name: string): Field {
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

  private buildPreviewPattern(preview) {
    const patternId = preview.id;

    const variant = preview.variant !== null ? preview.variant : null;
    const fields = preview.fields != null ? preview.fields : {};
    const settings = preview.settings != null ? preview.settings : {};
    const objects = Object.assign(fields, settings);
    return {
      patternId,
      variant,
      variables: objects,
    };
  }

  public getPreviewPatterns() {
    const previewPatterns = {};
    Object.keys(this.fields).forEach((key) => {
      const field: Field = this.fields[key];
      const preview = field.getPreview();
      if (field.getType() === 'pattern' && Array.isArray(preview)) {
        for (let i = 0; i < preview.length; i += 1) {
          previewPatterns[`${key}--${i}`] = this.buildPreviewPattern(preview[i]);
        }
      } else if (field.getType() === 'pattern' && preview != null && preview.id != null) {
        previewPatterns[key] = this.buildPreviewPattern(preview);
      }
    });
    return previewPatterns;
  }

  public getVariables() {
    const values = {};
    Object.keys(this.settings).forEach(key => {
      if (this.settings[key].getType() === 'attributes') {
        values[key] = new TwigAttribute(this.settings[key].getPreview());
      } else {
        values[key] = this.settings[key].getPreview();
      }
    });
    Object.keys(this.fields).forEach((key) => {
      const field: Field = this.fields[key];
      if (field !== null && field.getType() !== 'pattern') {
        values[key] = field.getPreview();
      }
    });

    if (this.variant !== Pattern.DEFAULT_VARIANT_NAME) {
      // eslint-disable-next-line dot-notation
      values['variant'] = this.variant;
    }
    // eslint-disable-next-line dot-notation
    if (values['attributes'] == null) {
      // eslint-disable-next-line dot-notation
      values['attributes'] = new TwigAttribute();
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
