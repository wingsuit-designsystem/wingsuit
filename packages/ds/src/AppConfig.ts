export default class AppConfig {
  private appName: string;

  private appPath: string;

  private namespaces: {} = {};

  constructor(appName: string, appPath: string) {
    this.appName = appName;
    this.appPath = appPath;
  }

  public getNamespaces(): {} {
    return this.namespaces;
  }

  public setNamespaces(value: {}) {
    this.namespaces = value;
  }

  public getAppName(): string {
    return this.appName;
  }

  public setAppName(value: string) {
    this.appName = value;
  }

  public getAppPath(): string {
    return this.appPath;
  }

  public setAppPath(value: string) {
    this.appPath = value;
  }
}
