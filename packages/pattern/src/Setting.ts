import Property from './Property';
import { Options, States, StateItem } from './definition';

export default class Setting extends Property {
  public getOptions(): Options {
    return this.options;
  }

  public setOptions(options: Options) {
    this.options = options;
  }

  public getOptionKeyByLabel(label): string {
    let optionKey = '';
    Object.keys(this.options).forEach((key) => {
      if (this.options[key] === label) {
        optionKey = key;
      }
    });
    return optionKey;
  }

  public getPreviewDisplayValue(): string {
    if (this.getType() === 'select' && this.getPreview()) {
      return this.options[this.getPreview()];
    }
    return this.getPreview();
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

  public getStates(): States {
    return this.states;
  }

  public setStates(states: States) {
    this.states = states;
  }

  public isActive(): boolean {
    const states: States = this.getStates();
    let isActive = true;
    Object.entries(states).forEach(([visibility, stateItems]) => {
      stateItems.forEach((stateItem: StateItem) => {
        const match = stateItem.variant && stateItem.variant === this.variant.getId();
        if (!match && visibility === 'visible') {
          isActive = false;
        }
        if (match && visibility === 'invisible') {
          isActive = false;
        }
      });
    });
    return isActive;
  }

  private defaultValue = '';

  private required = false;

  private options: Options = {};

  private states: States = {};
}
