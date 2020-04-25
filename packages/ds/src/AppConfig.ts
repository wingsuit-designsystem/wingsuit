export default class AppConfig {
  private _appName: string;
  private _appPath: string;
  private _namespaces: {} = {};

  constructor(appName: string, appPath: string) {
    this._appName = appName;
    this._appPath = appPath;
  }

  get namespaces(): {} {
    return this._namespaces;
  }

  set namespaces(value: {}) {
    this._namespaces = value;
  }

  get appName(): string {
    return this._appName;
  }

  set appName(value: string) {
    this._appName = value;
  }

  get appPath(): string {
    return this._appPath;
  }

  set appPath(value: string) {
    this._appPath = value;
  }
}