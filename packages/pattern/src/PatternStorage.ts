import IPatternStorage from './IPatternStorage';
import Pattern from './Pattern';
import PatternVariant from './PatternVariant';
import { IPatternDefinition, IPatternDefinitions } from './definition';

export default class PatternStorage implements IPatternStorage {
  private definitions: IPatternDefinitions = {} as IPatternDefinitions;

  private namespaces = {};

  private globals = {};

  private patterns: Pattern = {} as Pattern;

  private twigResources = new Map();

  static instance: PatternStorage;

  static getInstance() {
    if (!PatternStorage.instance) {
      PatternStorage.instance = new PatternStorage();
    }
    return PatternStorage.instance;
  }

  addGlobal(name: string, value: {}) {
    if (this.globals[name] != null) {
      if (typeof value === 'string') {
        this.globals[name] = value;
      } else {
        this.globals[name] = Object.assign(this.globals[name], value);
      }
    } else {
      this.globals[name] = value;
    }
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
    return Object.keys(this.definitions);
  }

  loadPatternsByNamespace(namespace): Pattern[] {
    const foundPatterns: Pattern[] = [];
    Object.keys(this.definitions).forEach((key) => {
      const pattern = this.loadPattern(key);
      if (pattern.getNamespace() === namespace) {
        foundPatterns.push(pattern);
      }
    });
    return foundPatterns;
  }

  /**
   * Performs a deep merge of objects and returns new object. Does not modify
   * objects (immutable) and merges arrays via concatenation.
   *
   * @param {...object} objects - Objects to merge
   * @returns {object} New object with merged key/values
   */
  private mergeDeep(...objects) {
    const isObject = (obj) => obj && typeof obj === 'object';

    return objects.reduce((prev, obj) => {
      Object.keys(obj).forEach((key) => {
        const pVal = prev[key];
        const oVal = obj[key];

        if (Array.isArray(pVal) && Array.isArray(oVal)) {
          // eslint-disable-next-line no-param-reassign
          prev[key] = pVal.concat(...oVal);
        } else if (isObject(pVal) && isObject(oVal)) {
          // eslint-disable-next-line no-param-reassign
          prev[key] = this.mergeDeep(pVal, oVal);
        } else {
          // eslint-disable-next-line no-param-reassign
          prev[key] = oVal;
        }
      });

      return prev;
    }, {});
  }

  private extendPatternDefinition(pattern: IPatternDefinition) {
    const resultingPattern = pattern;
    if (pattern != null && pattern.extends != null && pattern.extends.length !== 0) {
      pattern.extends.forEach((extend: string) => {
        const [basePattern, basePatternType, basePatternField] = extend.split('.');
        if (this.definitions[basePattern] == null) {
          throw new Error(
            `Base pattern "${basePattern}" not found. Possible patterns ${Object.keys(
              this.definitions
            ).join(', ')}`
          );
        }
        const basePatternDefinition = this.extendPatternDefinition(this.definitions[basePattern]);
        let basePatternTypes: string[] = [];
        if (basePatternType == null) {
          basePatternTypes = ['fields', 'settings'];
          if (resultingPattern.use === undefined) {
            resultingPattern.use = basePatternDefinition.use;
          }
        } else {
          basePatternTypes = [basePatternType];
        }

        Object.keys(basePatternTypes).forEach((key) => {
          const type: string = basePatternTypes[key];
          if (basePatternField == null) {
            if (basePatternDefinition[type] != null) {
              if (resultingPattern[type] == null) {
                resultingPattern[type] = {};
              }
              resultingPattern[type] = this.mergeDeep(
                basePatternDefinition[type],
                resultingPattern[type]
              );
            }
          } else if (basePatternDefinition[type] != null) {
            if (resultingPattern[type] == null) {
              resultingPattern[type] = [];
            }
            resultingPattern[type][basePatternField] =
              basePatternDefinition[type][basePatternField];
          }
        });
      });
      resultingPattern.extends = [];
    }
    return resultingPattern;
  }

  loadPattern(patternId: string): Pattern {
    if (this.patterns[patternId] !== undefined) {
      return this.patterns[patternId];
    }
    const definition: IPatternDefinition = this.extendPatternDefinition(
      this.definitions[patternId]
    );
    if (definition == null) {
      throw new Error(
        `Pattern definition "${patternId}" not found. Possible pattern ids are: "${Object.keys(
          this.definitions
        ).join(' ,')}"`
      );
    }
    this.patterns[patternId] = new Pattern(patternId, definition, this);
    return this.patterns[patternId];
  }

  loadVariant(patternId: string, variantId: string): PatternVariant {
    const pattern: Pattern = this.loadPattern(patternId);
    return pattern.getVariant(variantId);
  }

  createDefinitions(definitions: IPatternDefinitions): void {
    this.definitions = definitions;
  }

  addDefinition(id: string, pattern: IPatternDefinition) {
    this.definitions[id] = pattern;
  }

  addDefinitions(wingsuit) {
    Object.keys(wingsuit).forEach((id) => {
      this.definitions[id] = wingsuit[id];
    });
  }

  findTwigByNamespace(namespace): any | null {
    return this.twigResources.get(namespace);
  }

  findTwigById(id): any | null {
    const use = this.loadPattern(id).getUse();
    return this.findTwigByNamespace(use);
  }

  createGlobalsFromContext(context): void {
    context.keys().forEach((key) => {
      const data = context(key);
      Object.keys(data).forEach((valueKey) => {
        this.addGlobal(valueKey, data[valueKey]);
      });
    });
  }

  getTwigResources(): {} {
    return this.twigResources;
  }

  addTwig(namespace, resource): void {
    this.twigResources.set(namespace, resource.default);
  }
}
