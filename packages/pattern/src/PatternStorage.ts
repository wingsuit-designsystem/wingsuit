import * as fs from 'fs';
import IPatternStorage from './IPatternStorage';
import Pattern from './Pattern';
import PatternVariant from './PatternVariant';
import {IPatternDefinition, IPatternDefinitions} from './definition';

export default class PatternStorage implements IPatternStorage {
  private definitions: IPatternDefinitions = {} as IPatternDefinitions;

  private namespaces = {};

  private globals = {};

  private twigResources = {};

  addGlobal(name: string, value: {}) {
    this.globals[name] = value;
  }

  getGlobals() {
    return this.globals;
  }

  setNamespaces(namespaces: {}) {
    this.namespaces = namespaces;
  }

  getNamespaces() {
    return this.namespaces;
  }

  getPatternIds(): string[] {
    return Object.keys(this.definitions.patterns);
  }

  loadPattern(patternId: string): Pattern {
    const definition: IPatternDefinition = this.definitions.patterns[patternId];
    if (definition == null) {
      throw new Error(`Pattern ${patternId} not loaded.`);
    }
    return new Pattern(patternId, definition, this);
  }

  loadVariant(patternId: string, variantId: string): PatternVariant {
    const pattern: Pattern = this.loadPattern(patternId);
    if (pattern != null) {
      return pattern.getVariant(variantId);
    }
    throw new Error(`Variant ${patternId}.${variantId}  not loaded.`);
  }

  createDefinitionsFromFile(path: string): void {
    this.definitions = JSON.parse(fs.readFileSync(path, 'utf8'));
  }

  createDefinitions(definitions: IPatternDefinitions): void {
    this.definitions = definitions;
  }

  createDefinitionsFromContext(context): void {

    if (this.definitions.patterns == null) {
      this.definitions.patterns = {};
    }
    context.keys().forEach((key) => {
      if (key.includes('__tests__') === false && key.includes('__int_tests__') === false) {
        const data = context(key);
        if (data.defaults != null && typeof data.defaults.patternDefinition === 'object') {
          const {patternDefinition} = data.defaults;
          let {namespace} = data.defaults;
          if (namespace == null) {
            const hierachy = key.split('/');
            if (hierachy.length > 2) {
              namespace = hierachy[1];
            }
          }
          Object.keys(patternDefinition).forEach((pattern_key) => {
            if (patternDefinition[pattern_key].namespace == null) {

              patternDefinition[pattern_key].namespace = namespace;
            }
            this.definitions.patterns[pattern_key] = patternDefinition[pattern_key];
            console.log(this.definitions.patterns[pattern_key].namespace);
          })
        }
      }
    });
  }

  findTwigByNamespace(namespace) {
    let foundResource = null;
    Object.keys(this.twigResources).forEach((key) => {
      if (key.trim() === namespace.trim()) {
        foundResource = this.twigResources[key];
      }
    });
    return foundResource;
  }

  findTwigById(id) {
    const use = this.loadPattern(id).getUse();
    return this.findTwigByNamespace(use);
  }

  createTwigStorageFromContext(context) {
    context.keys().forEach((key) => {
      const pathAry = key.replace('./', '').split('/');
      const folderName = pathAry[0];
      let mappedNamespace = '';
      Object.keys(this.namespaces).forEach((namespace) => {
        const namespaceMap = this.namespaces[namespace].split('/');
        if (namespaceMap[namespaceMap.length - 1] === folderName) {
          mappedNamespace = namespace;
        }
      })
      pathAry.shift();
      this.addTwig(`@${mappedNamespace}/${pathAry.join('/')}`, context(key));
    });
  }

  addTwig(namespace, resource) {
    this.twigResources[namespace] = resource;
  }
}
