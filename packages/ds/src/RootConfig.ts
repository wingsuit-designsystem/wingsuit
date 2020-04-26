export default class RootConfig {
  constructor(rootPath) {
    this.rootPath = rootPath;
  }

  public getRootPath(): string {
    return this.rootPath;
  }

  public setRootPath(value: string) {
    this.rootPath = value;
  }

  public getDistPath(): string {
    return this.distPath;
  }

  public setDistPath(value: string) {
    this.distPath = value;
  }

  public getAssetBundleFolder(): string {
    return this.assetBundleFolder;
  }

  public setAssetBundleFolder(value: string) {
    this.assetBundleFolder = value;
  }

  public getAssetAtomicFolder(): string {
    return this.assetAtomicFolder;
  }

  setAssetAtomicFolder(value: string) {
    this.assetAtomicFolder = value;
  }

  private rootPath: string;

  private distPath = 'dist/';

  private assetBundleFolder = 'assets/';

  private assetAtomicFolder = 'atomic/';
}
