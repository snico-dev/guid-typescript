export class Guid {
  /**
   * For random GUID/UUID values, the version field is 4
   */
  public static readonly VERSION = '4';

  /**
   * For random GUID/UUID values, the variant field is one of these values.
   */
  public static readonly VARIANTS = ['8', '9', 'a', 'b'];

  /**
   * Checks for valid hexadecimal notation and ensures that version
   * and variant are valid according to  RFC 4122
   * @see https://www.rfc-editor.org/rfc/rfc4122
   */
  public static readonly validator = new RegExp(
    '^' +
      [
        '[a-z0-9]{8}',
        '[a-z0-9]{4}',
        `${Guid.VERSION}[a-z0-9]{3}`,
        `[${Guid.VARIANTS.join('')}][a-z0-9]{3}`,
        '[a-z0-9]{12}',
      ].join('-') +
      '$',
    'i'
  );

  public static EMPTY = '00000000-0000-0000-0000-000000000000';

    public static isGuid(guid: any) {
        const value: string = guid.toString();
        return guid && (guid instanceof Guid || Guid.validator.test(value));
    }

    public static create(): Guid {
        return new Guid(Guid.raw());
    }

    public static createEmpty(): Guid {
    return new Guid('emptyguid');
    }

    public static parse(guid: string): Guid {
        return new Guid(guid);
    }

    public static raw(): string {
        return [Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join("-");
    }

    private static gen(count: number): string {
    let out: string = '';
        for (let i: number = 0; i < count; i++) {
            // tslint:disable-next-line:no-bitwise
            out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return out;
    }

    private value: string;

    private constructor(guid: string) {
    if (!guid) {
      throw new TypeError('Invalid argument; `guid` has no value.');
    }

        this.value = Guid.EMPTY;

        if (guid && Guid.isGuid(guid)) {
            this.value = guid;
        }
    }

    public equals(other: Guid): boolean {
        // Comparing string `value` against provided `guid` will auto-call
        // toString on `guid` for comparison
        return Guid.isGuid(other) && this.value === other.toString();
    }

    public isEmpty(): boolean {
        return this.value === Guid.EMPTY;
    }

    public toString(): string {
        return this.value;
    }

    public toObject(): any {
        return {
      value: this.value,
    };
    }

    public toJSON(): any {
        console.warn('DEPRECATED: replace calls to guid.toJSON() with toObject()');
        return this.toObject();
    }
}


