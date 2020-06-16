export class Guid {

    public static validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");

    public static EMPTY = "00000000-0000-0000-0000-000000000000";

    public static isGuid = (guid: any) => guid && (guid instanceof Guid || Guid.validator.test(guid.toString()));

    public static create = (): Guid => new Guid([Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join("-"));

    public static createEmpty = (): Guid => new Guid("emptyguid");

    public static parse = (guid: string): Guid => new Guid(guid);

    public static raw = (): string => [Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join("-");

    private static gen(count: number) {
        let out: string = "";
        for (let i: number = 0; i < count; i++) {
            // tslint:disable-next-line:no-bitwise
            out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return out;
    }

    private value: string;

    private constructor(guid: string) {
        if (!guid) throw new TypeError("Invalid argument; `value` has no value.");
        this.value = Guid.EMPTY;

        if (guid && Guid.isGuid(guid)) this.value = guid;
    }

    // Comparing string `value` against provided `guid` will auto-call
    // toString on `guid` for comparison
    public equals = (other: Guid): boolean => Guid.isGuid(other) && this.value === other.toString();

    public isEmpty = (): boolean => this.value === Guid.EMPTY;

    public toString = (): string => this.value;

    public toJSON(): any { return { value: this.value, }; }
}


