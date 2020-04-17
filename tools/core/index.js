import { storiesOf } from "@storybook/html";
class BasePreviewProvider {
  getPreview($definition) {

  }
}

class BaseSettingPreviewProvider extends BasePreviewProvider {
  getPreview($definition) {

  }
}

class Pattern {
  constructor(id, definition, fields, settings) {
    this.path = path;
    this.settingProvider = [];
    this.fieldProvider = [];
    this.patternProvider = [];
  }

  addSettingProvider(type, provider) {
    this.settingProvider[type] = provider;
  }

  addFieldProvider(type, provider) {
    this.fieldProvider[type] = provider;
  }

  addPatternProvider(type, provider) {
    this.patternProvider[type] = provider;
  }
}

class OptionSettingPreviewProvider extends BasePreviewProvider {
  getPreview($definition) {

  }
}

export class PatternStorage {
  constructor(path) {
    this.path = path;
    if(instance){
      return instance;
    }
  }

  load(id, variant, fields, settings) {
    storiesOf('Button', module)
      .add('with text', () => 'asdf')
      .add('with some emoji', () => 'X')
  }
}
