import { assert, expect } from "chai";
import "mocha";
import { Guid } from "../lib/guid";

describe("Guid", () => {    
    const exampleGuid: string = "0315642c-a069-9f3e-1852-9adf2d075b93";

    it("should create & validate a random guid", () => {
        const wrong = "wrongguid";
        expect(Guid.isValid(wrong)).equal(false);

        const right = Guid.create();
        expect(Guid.isValid(right)).equal(true);
    });

    it("should parse & validate a guid", () => {
        const wrong = "wrongguid";
        expect(Guid.isValid(wrong)).equal(false);

        expect(Guid.isValid(exampleGuid)).equal(true);
    });

    it("should compare GUID instances to another", () => {
        const wrong = Guid.create();
        expect(wrong.equals(Guid.create())).equal(false);
        
        const right = Guid.create(exampleGuid);
        const duplicate = Guid.create(exampleGuid);
        expect(right.equals(duplicate)).equal(true);
    });

    it("should be unique value", () => {
        const guids = [];
        for (let index = 0; index < 3000; index++) {
            guids.push(Guid.create());
        }
        expect(guids.indexOf(guids[0]) < 0).equal(false);
        
        expect(guids.indexOf(Guid.create()) < 0).equal(true);
    });

    it("should create nulled GUIDs & return them as string", () => {
        expect(Guid.createEmpty().toString()).equal(Guid.EMPTY);
    });

    it("should not care about GUID case at all", () => {
        const upperCaseGuid: Guid = new Guid(exampleGuid.toUpperCase());
        const lowerCaseGuid: Guid = Guid.create(exampleGuid);
        expect(upperCaseGuid.equals(lowerCaseGuid)).equal(true);
    });
});
