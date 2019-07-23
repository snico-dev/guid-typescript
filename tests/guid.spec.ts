import { expect } from "chai";
import "mocha";
import { Guid } from "../lib/guid";

describe("Guid", () => {
    const example_hyphen: string = "0315642c-a069-9f3e-1852-9adf2d075b93";
    const example_no_hyphen: string = "0315642ca0699f3e18529adf2d075b93";

    it("should create & validate a random GUID", () => {
        const wrong: string = "wrongguid";
        expect(Guid.isValid(wrong)).equal(false);

        const static_guid: Guid = Guid.create();
        expect(Guid.isValid(static_guid)).equal(true); //valid?
        expect(static_guid.toString()).not.equal(Guid.EMPTY); //not null?

        const dynamic_guid: Guid = new Guid();
        expect(Guid.isValid(dynamic_guid)).equal(true); //valid?
        expect(dynamic_guid.toString()).not.equal(Guid.EMPTY); //not null?
    });

    if("should not instantiate itself if the input value is invalid", () => {
        const text: string = "random test string";

        //method 1: static instantiation
        expect(() => Guid.create(text)).to.throw("TypeError");

        //method 2: directly using the constructor
        expect(() => new Guid(text)).to.throw("TypeError");
    });

    it("should parse & validate a GUID", () => {
        const wrong: string = "wrongguid";
        expect(Guid.isValid(wrong)).equal(false);

        expect(Guid.isValid(example_hyphen)).equal(true);
    });

    it("should create nulled GUIDs & return them as a string", () => {
        expect(Guid.createEmpty().toString()).equal(Guid.EMPTY);
    });

    it("should parse non-hyphenated GUIDs & return them in the more readable RFC 4122 format", () => {
        expect(Guid.create(example_no_hyphen).toString()).equal(example_hyphen);
        expect(new Guid(example_no_hyphen).toString()).equal(example_hyphen); //same, but using the constructor
    });

    it("should convert GUIDs to non-hyphenated GUIDs", () => {
        expect(Guid.create(example_hyphen).toShortString()).equal(example_no_hyphen);
    });

    it("should compare GUID instances to another", () => {
        const wrong_guid: Guid = Guid.create();
        expect(wrong_guid.equals(Guid.create())).equal(false);
        
        const correct_guid: Guid = Guid.create(example_hyphen);
        const duplicate_guid: Guid = Guid.create(example_hyphen);
        expect(correct_guid.equals(duplicate_guid)).equal(true);
    });

    it("should generate unique GUIDs only", () => {
        const guids: Array<Guid> = [];
        for (let index: number = 0; index < 3000; index++) {
            guids.push(Guid.create());
        }
        expect(guids.indexOf(guids[0]) < 0).equal(false);
        
        expect(guids.indexOf(Guid.create()) < 0).equal(true);
    });

    it("should not care about GUID case at all", () => {
        const upperCaseGuid: Guid = new Guid(example_hyphen.toUpperCase());
        const lowerCaseGuid: Guid = Guid.create(example_hyphen);
        expect(upperCaseGuid.equals(lowerCaseGuid)).equal(true);
    });
});
