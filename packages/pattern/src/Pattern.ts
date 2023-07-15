import PatternVariant from './PatternVariant';
import Setting from './Setting';
import Field, { MultiValueTypes } from './Field';
import { IPatternDefinition, Properties, Options, Variants } from './definition';
import IPatternStorage from './IPatternStorage';
import { mergeDeep } from './utils';

interface CleanedOptions {
  [key: string]: Options;
}

export default class Pattern {
  public static DEFAULT_VARIANT_NAME = '__default';

  public getUse(): string {
    return this.use;
  }

  public getStoryName(): string {
    return `${this.getNamespace()}/${this.getLabel()}`;
  }

  public getLabel(): string {
    return this.label;
  }

  public getIconPath(): string | undefined {
    return this.iconPath;
  }

  public setIconPath(iconPath): void {
    this.iconPath = iconPath;
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

  private iconPath: string | undefined;

  private template: any;

  private namespace: string;

  private parameters: any;

  private use: string;

  private visible: string;

  private definition: IPatternDefinition;

  private patternVariants: PatternVariant[] = [];

  private defaultVariant: PatternVariant;

  private storage: IPatternStorage;

  public isVisible(app) {
    if (this.visible == null || this.visible === '') {
      return true;
    }
    const apps = this.visible.split('|');
    for (let i = 0; i < apps.length; i += 1) {
      if (apps[i].trim() === app) {
        return true;
      }
    }
    return false;
  }

  constructor(id: string, definition: IPatternDefinition, storage: IPatternStorage) {
    this.id = id;
    this.label = definition.label;
    this.description = definition.description;
    this.visible = definition.visible;
    this.storage = storage;
    this.use = definition.use;
    this.iconPath = definition.icon_path?.replace('ws-assets://', '');
    this.namespace = definition.namespace;
    this.parameters = definition.parameters;
    this.definition = definition;
    if (definition.template) {
      this.setTemplate(definition.template);
    }
    this.defaultVariant = new PatternVariant(
      '__default',
      this,
      Pattern.DEFAULT_VARIANT_NAME,
      this.use,
      this.label,
      this.description,
      definition.configuration
    );
    this.initializeVariants();
  }

  getPatternVariants() {
    return this.patternVariants;
  }

  public getVariant(id: string = Pattern.DEFAULT_VARIANT_NAME) {
    const variantId = id === '' || id == null ? Pattern.DEFAULT_VARIANT_NAME : id;
    if (this.patternVariants[variantId] == null) {
      throw new Error(
        `Variant "${id}" not found in pattern "${this.getId()}". Possible Variants are: "${Object.keys(
          this.patternVariants
        ).join(', ')}"`
      );
    }
    return this.patternVariants[variantId];
  }

  public getTemplate() {
    return this.template;
  }

  public setTemplate(template) {
    this.template = template;
  }

  public getParameters(): any {
    return this.parameters;
  }

  public getStorage(): IPatternStorage {
    return this.storage;
  }

  private initializeVariants() {
    const variantKeys: string[] = [];
    const settings: Properties = this.definition.settings ?? {};
    const fields: any = this.definition.fields ?? {};

    const settingsConfiguration: any = {};

    const configuration: any = this.definition.configuration ?? {};
    const variantsDefinitions: Variants = this.definition.variants ?? {};

    Object.keys(variantsDefinitions).forEach((key: string) => {
      variantKeys.push(key);
    });

    if (variantKeys.length === 0) {
      variantKeys.push(Pattern.DEFAULT_VARIANT_NAME);
    }
    let isFirst = true;
    variantKeys.forEach((variantKey: string) => {
      const cleanedSettings: CleanedOptions = {};
      Object.entries(settings).forEach(([name, setting]) => {
        if (setting.options) {
          const options: Options = {};
          Object.entries(setting.options).forEach(([optionName, option]) => {
            if (option.configuration) {
              if (!settingsConfiguration[name]) {
                settingsConfiguration[name] = {};
              }
              settingsConfiguration[name][optionName] = option.configuration;
              options[optionName] = option.label;
            } else {
              options[optionName] = option;
            }
          });
          cleanedSettings[name] = options;
        }
      });
      const variantDefinition = variantsDefinitions[variantKey] ?? {};
      const label = variantDefinition.label ?? this.label;
      const use = variantDefinition.use ?? this.use;
      const description = variantDefinition.description ?? '';

      const variantConfiguration =
        variantDefinition.configuration != null ? variantDefinition.configuration : {};
      const mergedConfiguration = mergeDeep(
        configuration,
        settingsConfiguration,
        variantConfiguration
      );

      const variant = new PatternVariant(
        variantKey,
        this,
        variantKey,
        use,
        label,
        description,
        mergedConfiguration
      );

      if (isFirst) {
        this.defaultVariant = variant;
      }
      isFirst = false;

      Object.keys(settings).forEach((key: string) => {
        const setting = new Setting(
          key,
          settings[key].type,
          settings[key].label,
          settings[key].description ?? '',
          settings[key].preview,
          variant
        );
        setting.setStates(settings[key].states ?? {});
        setting.setRequired(settings[key].required ?? false);
        setting.setOptions(cleanedSettings[key]);
        if (settings[key].default_value) {
          setting.setDefaultValue(settings[key].default_value ?? '');
        }

        if (settings[key].default_value) {
          setting.setPreview(settings[key].default_value ?? null);
        }
        if (!setting.getPreview() && settings[key].required && settings[key].type === 'select') {
          const keys = Object.keys(cleanedSettings[key]);
          if (keys.length > 0) {
            const firstOption = keys[0];
            setting.setPreview(firstOption);
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
          fields[key].preview,
          variant
        );

        field.setMultiValueType(MultiValueTypes.single_value);
        if (fields[key].multi_value_type != null) {
          field.setMultiValueType(MultiValueTypes[fields[key].multi_value_type]);
        } else if (Array.isArray(fields[key].preview)) {
          field.setMultiValueType(MultiValueTypes.single_value);
        }
        variant.addField(field);
      });

      if (variantDefinition) {
        if (variantDefinition.settings) {
          Object.keys(variantDefinition.settings).forEach((key: string) => {
            const setting: Setting = variant.getSetting(key);
            if (setting) {
              // @ts-ignore
              setting.setPreview(variantDefinition.settings[key]);
              setting.setEnable(false);
            } else {
              console.warn(
                `Invalid variant configuration. Setting with ${key} doesn't exists in variant. ${variant.getId()}`
              );
            }
          });
        }
        if (variantDefinition.fields) {
          Object.keys(variantDefinition.fields).forEach((key: string) => {
            const field: Field = variant.getField(key);
            // @ts-ignore
            field.setPreview(variantDefinition.fields[key]);
            field.setEnable(false);
          });
        }
      }
      this.patternVariants[variantKey] = variant;
    });
  }
}
