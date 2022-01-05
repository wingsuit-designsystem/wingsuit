import Field from './Field';
import Setting from './Setting';
import Pattern from './Pattern';
import IPatternStorage from './IPatternStorage';
import TwigAttribute from './TwigAttribute';

export default class PatternVariant {

  public getUse(): string {
    return this.use;
  }

  public getStoryId(): string {
    const pattern = this.getPattern();
    return this.cleanStorybookString(
      `${pattern.getNamespace()}-${pattern.getLabel()}--${this.getLabel()}`
    );
  }

  public getId(): string {
    return this.id;
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

  public setConfiguration(configuration: any) {
    this.configuration = configuration;
  }

  public getConfiguration(): any {
    return this.configuration;
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

  private handleFieldItem(fieldItem) {
    const variant = fieldItem.variant !== null ? fieldItem.variant : null;
    const fields = fieldItem.fields != null ? fieldItem.fields : {};
    const settings = fieldItem.settings != null ? fieldItem.settings : {};
    const objects = Object.assign(fields, settings);
    return {
      patternId: fieldItem.id,
      variant,
      fields,
      settings,
      variables: objects,
    };
  }

  private handleSubPreviewPattern(preview, parentVariables) {
    if (preview.fields !== undefined) {
      Object.keys(preview.fields).forEach((key) => {
        const field = preview.fields[key];
        if (field != null && field.id !== undefined) {
          if (parentVariables.children === undefined) {
            // eslint-disable-next-line no-param-reassign
            parentVariables.children = {};
          }
          // eslint-disable-next-line no-param-reassign
          parentVariables.children[key] = this.handleFieldItem(field);
          this.handleSubPreviewPattern(field, parentVariables.children[key]);
        } else if (Array.isArray(field)) {
          let i = 0;
          if (parentVariables.children === undefined) {
            // eslint-disable-next-line no-param-reassign
            parentVariables.children = {};
          }
          field.forEach((item) => {
            if (item.id !== undefined) {
              // eslint-disable-next-line no-param-reassign
              parentVariables.children[`${key}--${i}`] = this.handleFieldItem(item);
              this.handleSubPreviewPattern(item, parentVariables.children[`${key}--${i}`]);
              i += 1;
            }
          });
        }
      });
    }
  }

  private buildPreviewPattern(preview) {
    const rootVariables = this.handleFieldItem(preview);
    this.handleSubPreviewPattern(preview, rootVariables);
    return rootVariables;
  }

  public getRenderInfo() {
    const previewPatterns = {};
    Object.keys(this.fields).forEach((key) => {
      const field: Field = this.fields[key];
      const preview = field.getPreview();
      if (field.getType() === 'pattern' && Array.isArray(preview)) {
        for (let i = 0; i < preview.length; i += 1) {
          previewPatterns[`${key}--${i}`] = this.buildPreviewPattern(preview[i]);
        }
      } else if (field.getType() === 'pattern' && preview?.id) {
        previewPatterns[key] = this.buildPreviewPattern(preview);
      }
    });
    Object.keys(this.settings).forEach((key) => {
      const setting: Setting = this.settings[key];
      const preview = setting.getPreview();
      if (setting.getType() === 'media' && preview?.id) {
        previewPatterns[key] = this.buildPreviewPattern(preview);
      }
    });
    return previewPatterns;
  }

  public setRenderArgs(args) {
    this.renderArgs = args;
    if (this.beforeRenderHandler != null) {
      this.beforeRenderHandler(args);
    }
  }

  public getRenderArgs() {
    return this.renderArgs;
  }

  public beforeRender(handler) {
    this.beforeRenderHandler = handler;
  }

  public getVariables(includeFields = true, includeSettings = true) {
    const values = {};
    if (this.variant !== Pattern.DEFAULT_VARIANT_NAME) {
      // eslint-disable-next-line dot-notation
      values['variant'] = this.variant;
    }
    if (includeFields) {
      Object.keys(this.fields).forEach((key) => {
        const field: Field = this.fields[key];
        if (field !== null && field.getType() !== 'pattern') {
          values[key] = field.getPreview();
        }
      });
    }

    if (includeSettings) {
      Object.keys(this.settings).forEach((key) => {
        if (this.settings[key].getType() !== 'media') {
          if (this.settings[key].getType() === 'attributes') {
            values[key] = new TwigAttribute(this.settings[key].getPreview());
          } else {
            values[key] = this.settings[key].getPreview();
          }
        }
      });
    }

    // eslint-disable-next-line dot-notation
    if (values['attributes'] == null) {
      // eslint-disable-next-line dot-notation
      values['attributes'] = new TwigAttribute();
    }

    return values;
  }

  private pattern: Pattern;

  private id: string;

  private use: string;

  private variant: string;

  private renderArgs:any = {};

  private beforeRenderHandler: any;

  private label: string;

  private description: string;


  private configuration: any;

  private fields: Field[] = [];

  private settings: Setting[] = [];

  private cleanStorybookString(string: string) {
    return string.toLowerCase().replace(/ /g, '-').replace(/\//g, '-');
  }

  constructor(
    id: string,
    pattern: Pattern,
    variant: string,
    use: string,
    label: string,
    description: string,
    configuration: any
  ) {
    this.id = id;
    this.pattern = pattern;
    this.variant = variant;
    this.label = label;
    this.use = use;
    this.description = description;
    this.configuration = configuration;
  }
}
