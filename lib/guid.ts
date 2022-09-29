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
    // This short circuit is added because the validator won't validate the null GUID.
    if (value === Guid.EMPTY) {
      return true;
    }
    return guid && (guid instanceof Guid || Guid.validator.test(value));
  }

  public static create(): Guid {
    return new Guid(Guid.raw());
  }

  public static createEmpty(): Guid {
    return new Guid(null);
  }

  public static parse(guid: string): Guid {
    return new Guid(guid);
  }

  /**
   * Generates a raw GUID/UUID string.
   * @returns Raw v4 GUID/UUID string
   */
  public static raw(): string {
    const version = Guid.gen(1).split('');
    const variant = Guid.gen(1).split('');
    /**
     * First digit of the third nibble is always the version, 4
     */
    version[0] = Guid.VERSION;

    /**
     * First digit of the fourth nibble is one of [8, 9, a, b]
     */
    variant[0] = Guid.VARIANTS[Math.floor(Math.random() * Guid.VARIANTS.length)];
    return [Guid.gen(2), Guid.gen(1), version.join(''), variant.join(''), Guid.gen(3)].join('-');
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

  private constructor(guid: string | null) {
    if (guid === Guid.EMPTY || guid === null) {
    this.value = Guid.EMPTY;
      return;
    } else if (guid && Guid.isGuid(guid)) {
      this.value = guid;
      return;
    }
    throw new TypeError('Invalid argument; `guid` has no value.');
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
