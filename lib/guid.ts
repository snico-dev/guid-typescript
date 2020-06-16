
export const globals = {
    guidDefaultValue: '00000000-0000-0000-0000-000000000000',
    validationPattern: '^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$'
}

export class Guid {

    private static gen(count: number) {
        let out: string = '';
        for (let i: number = 0; i < count; i++) out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        return out;
    }

    private value: string;

    protected constructor(guid: string) {
        if (!guid) throw new TypeError('Invalid argument; `value` has no value.');
        this.value = globals.guidDefaultValue;

        if (guid && Guid.isGuid(guid)) this.value = guid;
    }

    static validator = new RegExp(globals.validationPattern, 'i');

    static isGuid = (guid: any) => guid && (guid instanceof Guid || Guid.validator.test(guid.toString()));

    static create = (): Guid => new Guid([Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join('-'));

    static createEmpty = (): Guid => new Guid(globals.guidDefaultValue);

    static parse = (guid: string): Guid => new Guid(guid);

    static raw = (): string => [Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join('-');

    static EMPTY = Guid.parse(globals.guidDefaultValue);

    // Comparing string `value` against provided `guid` will auto-call
    // toString on `guid` for comparison
    equals = (other: Guid): boolean => Guid.isGuid(other) && this.value === other.toString();

    isEmpty = (): boolean => this.value === globals.guidDefaultValue;

    toString = (): string => this.value;

    toJSON(): any { return { value: this.value } }
}
