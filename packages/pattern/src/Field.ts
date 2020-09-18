import Property from './Property';

export enum MultiValueTypes {
  items = 'items',
  field_items = 'field_items',
  single_value = 'single_value',
}

export default class Field extends Property {
  private multiValue: any;

  public multiValueType(): MultiValueTypes {
    return this.multiValue;
  }

  public setMultiValueType(multiValue: MultiValueTypes) {
    this.multiValue = multiValue;
  }
}
