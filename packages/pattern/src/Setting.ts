import Property from "./Property";
export default class Setting extends Property {
    get options(): string[] {
        return this._options;
    }

    set options(value: string[]) {
        this._options = value;
    }

    get enable(): boolean {
        return this._enable;
    }

    set enable(value: boolean) {
        this._enable = value;
    }
    private _enable: boolean = true;
    private _options: string[] = [];

}