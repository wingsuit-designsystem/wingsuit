import IPatternStorage from './IPatternStorage';
import Pattern from './Pattern';
import PatternVariant from './PatternVariant';
import { IPatternDefinition, IPatternDefinitions } from './definition';

export default class PatternStorage implements IPatternStorage {
  private definitions: IPatternDefinitions = {} as IPatternDefinitions;

  private namespaces = {};

  private globals = {};

  private twigResources = {};

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
        } else {
          basePatternTypes = [basePatternType];
        }

        Object.keys(basePatternTypes).forEach((key) => {
          const type: string = basePatternTypes[key];
          if (basePatternField == null) {
            if (basePatternDefinition[type] != null) {
              resultingPattern[type] = {
                ...resultingPattern[type],
                ...basePatternDefinition[type],
              };
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

    return new Pattern(patternId, definition, this);
  }

  loadVariant(patternId: string, variantId: string): PatternVariant {
    const pattern: Pattern = this.loadPattern(patternId);
    return pattern.getVariant(variantId);
  }

  createDefinitions(definitions: IPatternDefinitions): void {
    this.definitions = definitions;
  }

  createDefinitionsFromMultiContext(any): void {
    if (Array.isArray(any) === true) {
      any.forEach((context) => {
        if (context != null) {
          this.createDefinitionsFromContext(context);
        }
      });
    } else {
      this.createDefinitionsFromContext(any);
    }
  }

  createDefinitionsFromContext(context): void {
    context.keys().forEach((key) => {
      if (key.includes('__tests__') === false && key.includes('__int_tests__') === false) {
        const data = context(key);
        if (data.wingsuit != null && typeof data.wingsuit.patternDefinition === 'object') {
          const { patternDefinition } = data.wingsuit;
          let { namespace } = data.wingsuit;
          const { parameters } = data.wingsuit;
          if (namespace == null) {
            const hierachy = key.split('/');
            if (hierachy.length > 2) {
              // eslint-disable-next-line prefer-destructuring
              namespace = hierachy[1];
              const namespaceParts = namespace.split('-');
              if (namespaceParts.length > 1 && namespaceParts[0].length === 2) {
                namespaceParts.shift();
                namespace = namespaceParts.join('-');
                namespace = namespace.charAt(0).toUpperCase() + namespace.slice(1);
              }
            }
          }

          Object.keys(patternDefinition).forEach((pattern_key) => {
            if (parameters !== null) {
              patternDefinition[pattern_key].parameters = parameters;
            }
            if (patternDefinition[pattern_key].namespace == null) {
              patternDefinition[pattern_key].namespace = namespace;
            }
            this.definitions[pattern_key] = patternDefinition[pattern_key];
          });
        }
      }
    });
  }

  findTwigByNamespace(namespace): any | null {
    let foundResource = null;
    Object.keys(this.twigResources).forEach((key) => {
      if (key.trim() === namespace.trim()) {
        foundResource = this.twigResources[key];
      }
    });
    return foundResource;
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

  createTwigStorageFromContext(context): void {
    context.keys().forEach((key) => {
      const pathAry = key.replace('./', '').split('/');
      const folderName = pathAry[0];
      let mappedNamespace = '';
      Object.keys(this.namespaces).forEach((namespace) => {
        const namespaceMap = this.namespaces[namespace].split('/');
        if (namespaceMap[namespaceMap.length - 1] === folderName) {
          mappedNamespace = namespace;
        }
      });
      pathAry.shift();
      this.addTwig(`@${mappedNamespace}/${pathAry.join('/')}`, context(key));
    });
  }

  getTwigResources(): {} {
    const resources = this.twigResources;
    const result = {};
    Object.keys(resources).forEach((key) => {
      result[key] = resources[key].default;
    });
    return result;
  }

  addTwig(namespace, resource): void {
    this.twigResources[namespace] = resource;
  }
}
