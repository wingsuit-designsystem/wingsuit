import PatternVariant from './PatternVariant';
import Setting from './Setting';
import Field from './Field';
import { IPatternDefinition } from './definition';
import IPatternStorage from "./IPatternStorage";

export default class Pattern {
  public static DEFAULT_VARIANT_NAME = '__default';

  public getUse(): string {
    return this.use;
  }

  public getLabel(): string {
    return this.label;
  }

  public getNamespace(): string {
    return this.namespace;
  }

  public setNamespace(namespace): void {
    this.namespace = namespace;
  }

  public getDescription(): string {
    return this.description;
  }

  public getId(): string {
    return this.id;
  }

  public getDefaultVariant(): PatternVariant {
    return this.defaultVariant;
  }

  private id: string;

  private label: string;

  private description: string;

  private namespace: string;

  private parameters: any;

  private use: string;

  private definition: IPatternDefinition;

  private patternVariants: PatternVariant[] = [];

  private defaultVariant: PatternVariant;

  private storage: IPatternStorage;


  constructor(id: string, definition: IPatternDefinition, storage:IPatternStorage) {
    this.id = id;
    this.label = definition.label;
    this.description = definition.description;
    this.storage = storage;
    this.use = definition.use;
    this.namespace = definition.namespace;
    this.parameters = definition.parameters;
    this.definition = definition;
    this.defaultVariant = new PatternVariant(
      this,
      Pattern.DEFAULT_VARIANT_NAME,
      this.use,
      this.label,
      this.description
    );
    this.initializeVariants();
  }

  getPatternVariants() {
    return this.patternVariants;
  }

  public getVariant(id: string = Pattern.DEFAULT_VARIANT_NAME) {
    const variantId = id === '' ? Pattern.DEFAULT_VARIANT_NAME : id;
    return this.patternVariants[variantId];
  }

  public getParameters():any {
    return this.parameters;
  }

  public getStorage():IPatternStorage {
    return this.storage;
  }

  private initializeVariants() {
    const variantKeys: string[] = [];
    const settings: {} = this.definition.settings != null ? this.definition.settings : {};
    const fields: {} = this.definition.fields != null ? this.definition.fields : {};
    const variantsDefinitions: {} =
      this.definition.variants != null ? this.definition.variants : {};

    Object.keys(variantsDefinitions).forEach((key: string) => {
      variantKeys.push(key);
    });

    if (variantKeys.length === 0) {
      variantKeys.push(Pattern.DEFAULT_VARIANT_NAME);
    }
    let isFirst = true;
    variantKeys.forEach((variantKey: string) => {
      const variantDefinition =
        variantsDefinitions[variantKey] != null ? variantsDefinitions[variantKey] : {};
      const label =
        variantDefinition.label != null ? variantDefinition.label : this.label;
      const use = variantDefinition.use != null ? variantDefinition.use : this.use;
      const description =
        variantDefinition.description != null ? variantDefinition.description : '';

      const variant = new PatternVariant(this, variantKey, use, label, description);

      if (isFirst === true) {
        this.defaultVariant = variant;
      }
      isFirst = false;

      Object.keys(settings).forEach((key: string) => {
        const setting = new Setting(
          key,
          settings[key].type,
          settings[key].label,
          settings[key].descripfirstOptiontion,
          settings[key].preview
        );
        setting.setRequired(settings[key].required ? true : false);
        setting.setOptions(settings[key].options);
        setting.setDefaultValue(settings[key].default_value);
        if (settings[key].default_value != null) {
          setting.setPreview(settings[key].default_value);
        }
        if (settings[key].value != null) {
          setting.setPreview(settings[key].value);
        }
        if (setting.getPreview() == null && settings[key].required === true && settings[key].type === 'select') {
          const keys = Object.keys(settings[key].options);
          if (keys.length > 1) {
            const firstOption = keys[0];
            setting.setPreview(settings[key].options[firstOption]);
          }
        }
        variant.addSetting(setting);
      });

      Object.keys(fields).forEach((key: string) => {
        const field = new Field(
          key,
          fields[key].type,
          fields[key].label,
          fields[key].description,
          fields[key].preview
        );
        variant.addField(field);
      });

      if (variantDefinition != null) {
        if (variantDefinition.settings != null) {
          Object.keys(variantDefinition.settings).forEach((key: string) => {
            const setting: Setting = variant.getSetting(key);
            setting.setPreview(variantDefinition.settings[key]);
            setting.setEnable(false);
          });
        }
        if (variantDefinition.fields != null) {
          Object.keys(variantDefinition.fields).forEach((key: string) => {
            const field: Field = variant.getField(key);
            field.setPreview(variantDefinition.fields[key]);
          });
        }
      }
      this.patternVariants[variantKey] = variant;
    });
  }
}
