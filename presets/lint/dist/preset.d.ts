import { AppConfig } from '@wingsuit-designsystem/core';
interface LintConfig {
    esLintConfig: any;
    styleLintConfig: any;
}
export declare function defaultConfig(appConfig: AppConfig): LintConfig;
export declare function name(appConfig: AppConfig): string;
export declare function webpack(appConfig: AppConfig, config: LintConfig): {
    plugins: any[];
};
export {};
