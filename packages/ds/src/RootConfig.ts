export default class RootConfig {
  constructor(rootPath) {
    this._rootPath = rootPath;
  }

  get rootPath(): string {
    return this._rootPath;
  }

  set rootPath(value: string) {
    this._rootPath = value;
  }

  get distPath(): string {
    return this._distPath;
  }

  set distPath(value: string) {
    this._distPath = value;
  }

  get assetBundleFolder(): string {
    return this._assetBundleFolder;
  }

  set assetBundleFolder(value: string) {
    this._assetBundleFolder = value;
  }

  get assetAtomicFolder(): string {
    return this._assetAtomicFolder;
  }

  set assetAtomicFolder(value: string) {
    this._assetAtomicFolder = value;
  }
  private _rootPath:string;
  private _distPath: string = 'dist/';
  private _assetBundleFolder: string = 'assets/';
  private _assetAtomicFolder: string = 'atomic/';

}