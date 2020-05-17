import AppConfig from "../AppConfig";
import WebpackBundle from "./WebpackBundle";

export default interface WebpackBundleConstructor {
  new (name, appConfig: AppConfig): WebpackBundle;
}