import { expect } from 'chai';
import 'mocha';
import { Guid } from '../lib/guid';

describe('Guid test', () => {
  it('Should create a guid', () => {
    const wrong = 'wrongguid';
    expect(Guid.isGuid(wrong)).equal(false);

    const right = Guid.create();
    expect(Guid.isGuid(right)).equal(true);
  });

  it('Should raw a guid', () => {
    const wrong = 'wrongguid';
    expect(Guid.isGuid(wrong)).equal(false);

    const right = Guid.raw();
    expect(Guid.isGuid(right)).equal(true);
  });

  it('Should compare another guid', () => {
    const wrong = Guid.create();
    expect(wrong.equals(Guid.create())).equal(false);

    const right = Guid.create();
    expect(right.equals(right)).equal(true);
  });

  it('Should compare another guid empty', () => {
    const wrong = Guid.createEmpty();
    expect(wrong.equals(Guid.create())).equal(false);

    const right = Guid.createEmpty();
    expect(right.equals(Guid.createEmpty())).equal(true);
  });

  it('Should verify if is guid', () => {
    const wrong = 'wrong guid';
    expect(Guid.isGuid(wrong)).equal(false);

    const right = Guid.create();
    expect(Guid.isGuid(right)).equal(true);
  });

  it('Should parse a guid', () => {
    const wrong = Guid.raw();
    expect(Guid.parse(wrong).equals(Guid.create())).equal(false);

    const right = Guid.raw();
    expect(Guid.parse(right).equals(Guid.parse(right))).equal(true);
  });

  it('Should be unique value', () => {
    const guids = [];
    for (let index = 0; index < 3000; index++) {
      guids.push(Guid.create());
    }
    expect(guids.indexOf(guids[0]) < 0).equal(false);

    expect(guids.indexOf(Guid.create()) < 0).equal(true);
  });

  it('Should validate GUID-like strings with isGuidLike(maybeGuidLike)', () => {
    const guidLikeStrings = [
      '26bc913c-eb11-9c0a-1d0b-4ebef6e1487c',
      '11111111-1111-1111-1111-111111111111',
    ];
    guidLikeStrings.forEach((guidLikeString) => {
      expect(Guid.isGuidLike(guidLikeString)).equal(true);
      expect(Guid.isGuid(guidLikeString)).equal(false);
    });
  });

  it('Should validate when GUID is empty/null guid', () => {
    const empty = '00000000-0000-0000-0000-000000000000';
    expect(Guid.isGuid(empty)).equal(true);
  });

  it("Should NOT validate when GUID version isn't 4", () => {
    const badGuid = '26bc913c-eb11-9c0a-8d0b-4ebef6e1487c';
    expect(Guid.isGuid(badGuid)).equal(false);
  });

  it("Should NOT validate when a GUID variant isn't 8, 9, a, b", () => {
    const badGuids = [];
    for (let i = 0; i < 16; i++) {
      // 10 and 11 are 0xa and 0xb
      if ([8, 9, 10, 11].indexOf(i) > -1) {
        continue;
      }
      badGuids.push(`26bc913c-eb11-4c0a-${i.toString(16)}d0b-4ebef6e1487c`);
    }
    expect(badGuids.every((badGuid) => Guid.isGuid(badGuid) === false)).equal(true);
  });
});
