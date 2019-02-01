import { assert, expect } from "chai";
import "mocha";
import { Guid } from "../lib/guid";

describe("Guid test", () => {
    
    it("Should create a guid", () => {
        const wrong = "wrongguid";
        expect(Guid.isGuid(wrong)).equal(false);

        const right = Guid.create();
        expect(Guid.isGuid(right)).equal(true);
    });

    it("Should raw a guid", () => {
        const wrong = "wrongguid";
        expect(Guid.isGuid(wrong)).equal(false);

        const right = Guid.raw();
        expect(Guid.isGuid(right)).equal(true);
    });

    it("Should compare another guid", () => {
        const wrong = Guid.create();
        expect(wrong.equals(Guid.create())).equal(false);
        
        const right = Guid.create();
        expect(right.equals(right)).equal(true);
    });

    it("Should compare another guid empty", () => {
        const wrong = Guid.createEmpty(); 
        expect(wrong.equals(Guid.create())).equal(false);
        
        const right = Guid.createEmpty();
        expect(right.equals(Guid.createEmpty())).equal(true);
    });

    it("Should verify if is guid", () => {
        const wrong = "wrong guid";
        expect(Guid.isGuid(wrong)).equal(false);
        
        const right = Guid.create();
        expect(Guid.isGuid(right)).equal(true);
    });

    it("Should parse a guid", () => {
        const wrong = Guid.raw();
        expect(Guid.parse(wrong).equals(Guid.create())).equal(false);
        
        const right = Guid.raw();
        expect(Guid.parse(right).equals(Guid.parse(right))).equal(true);
    });

    it("Should be unique value", () => {        
        const guids = [];
        for (let index = 0; index < 3000; index++) {
            guids.push(Guid.create());
        }
        expect(guids.indexOf(guids[0]) < 0).equal(false);
        
        expect(guids.indexOf(Guid.create()) < 0).equal(true);
    });

    it("Should compare to same but upper case generated guid", () => {
        const lowerCaseGuid = Guid.parse("bb58b763-868b-4ff4-873f-1943902a4056");
        const upperCaseGuid = Guid.parse("BB58B763-868B-4FF4-873F-1943902A4056");
        expect(lowerCaseGuid.equals(upperCaseGuid)).equal(true);
    });
});