import { AppConfig } from '@wingsuit-designsystem/core';
export declare function name(appConfig: AppConfig): string;
export declare function webpack(appConfig: AppConfig): {
    module: {
        rules: {
            test: RegExp;
            use: {
                loader: string;
                options: {
                    environmentModulePath: string;
                };
            }[];
        }[];
    };
};
