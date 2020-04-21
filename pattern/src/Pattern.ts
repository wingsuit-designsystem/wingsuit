import PatternVariant from "./PatternVariant";
import Setting from "./Setting";
import Field from "./Field";

export default class Pattern {
  get use(): string {
    return this._use;
  }

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get id(): string {
    return this._id;
  }

  get defaultVariant(): PatternVariant {
    return this._defaultVariant;
  }

  private _id: string;
  private _label: string;
  private _description: string;
  private _use: string;
  private _definition: {} = {};
  private _patternVariants: PatternVariant[] = [];
  private _defaultVariant: PatternVariant;

  constructor(id: string, definition: {}) {
    this._id = id;
    this._label = definition['label'];
    this._description = definition['description'];
    this._use = definition['use'];
    this._definition = definition;
    this.initializeVariants();
  }

  get patternVariants() {
    return this._patternVariants;
  }

  public getVariant(id: string) {
    return this._patternVariants[id];
  }

  private initializeVariants() {
    const variantKeys: string[] = [];
    const settings: {} = this._definition['settings'] != null ? this._definition['settings'] : {};
    const fields: {} = this._definition['fields'] != null ? this._definition['fields'] : {};
    const variantsDefinitions: {} = this._definition['variants'] != null ? this._definition['variants'] : {};

    Object.keys(variantsDefinitions).forEach(function (key: string) {
      variantKeys.push(key);
    });

    if (variantKeys.length == 0) {
      variantKeys.push('default');
    }
    for (let i: number = 0; i < variantKeys.length; i++) {
      const variantKey = variantKeys[i];
      const variantDefinition = variantsDefinitions[variantKey] != null ? variantsDefinitions[variantKey] : {};
      const label = variantDefinition != null ? this.label + ': ' + variantDefinition['label'] : this.label;
      const use = variantDefinition['use'] != null ? variantDefinition['use'] : this.use;
      const description = variantDefinition != null ? variantDefinition['description'] : this.description;
      const variant = new PatternVariant(this._id, variantKey, use, label, description);

      if (i == 0) {
        this._defaultVariant = variant;
      }
      Object.keys(settings).forEach(function (key: string) {
        const setting = new Setting(key, settings[key]['type'], settings[key]['label'], settings[key]['description'], settings[key]['preview']);
        setting.options = settings[key]['options'];
        if (settings[key]['default_value'] != null) {
          setting.preview = settings[key]['default_value'];
        }
        if (settings[key]['value'] != null) {
          setting.preview = settings[key]['value'];
        }

        variant.addSetting(setting);
      });

      Object.keys(fields).forEach(function (key: string) {
        const field = new Field(key, fields[key]['type'], fields[key]['label'], fields[key]['description'], fields[key]['preview']);
        variant.addField(field);
      });

      if (variantDefinition != null) {
        if (variantDefinition['settings'] != null) {
          Object.keys(variantDefinition['settings']).forEach(function (key: string) {
            const setting: Setting = variant.getSetting(key)
            setting.preview = variantDefinition['settings'][key];
            setting.enable = false;
          });
        }
        if (variantDefinition['fields'] != null) {
          Object.keys(variantDefinition['fields']).forEach(function (key: string) {
            const field: Field = variant.getField(key)
            field.preview = variantDefinition['fields'][key];
          });
        }

      }
      this._patternVariants[variantKey] = variant;
    }
  }
}
