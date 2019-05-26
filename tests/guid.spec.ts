import { assert, expect } from "chai";
import "mocha";
import { Guid } from "../lib/guid";

describe("Guid", () => {    
    const exampleGuid = "0315642c-a069-9f3e-1852-9adf2d075b93";

    it("Should create & validate a random guid", () => {
        const wrong = "wrongguid";
        expect(Guid.isGuid(wrong)).equal(false);

        const right = Guid.create();
        expect(Guid.isGuid(right)).equal(true);
    });

    it("Should parse & validate a guid", () => {
        const wrong = "wrongguid";
        expect(Guid.isGuid(wrong)).equal(false);

        expect(Guid.isGuid(exampleGuid)).equal(true);
    });

    it("Should compare to another guid", () => {
        const wrong = Guid.create();
        expect(wrong.equals(Guid.create())).equal(false);
        
        const right = Guid.create();
        expect(right.equals(right)).equal(true);
    });

    it("Should be unique value", () => {
        const guids = [];
        for (let index = 0; index < 3000; index++) {
            guids.push(Guid.create());
        }
        expect(guids.indexOf(guids[0]) < 0).equal(false);
        
        expect(guids.indexOf(Guid.create()) < 0).equal(true);
    });

    it("Should create nulled GUIDs & return them as string", () => {
        expect(Guid.createEmpty().toString()).equal(Guid.EMPTY);
    });

    it("Should return valid JSON", () => {
        expect(Guid.create(exampleGuid).toJSON()).to.eql({ value: exampleGuid });
    });
});
