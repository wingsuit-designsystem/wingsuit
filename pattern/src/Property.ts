export default class Property {
    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get preview(): any {
        return this._preview;
    }

    set preview(value: any) {
        this._preview = value;
    }

    get label(): string {
        return this._label;
    }

    set label(value: string) {
        this._label = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    private _name: string;
    private _type: string;
    private _label: string;
    private _description: string;
    private _preview: any;

    constructor(name: string, type: string, label: string, description: string, preview: any) {
        this._name = name;
        this._type = type;
        this._label = label;
        this._description = description;
        this._preview = preview;
    }
}