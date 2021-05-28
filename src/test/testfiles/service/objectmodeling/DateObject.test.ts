/**
 * Tests the DateObject
 */

import DateObject from "../../../../service/objectmodeling/DateObject";
import testData from "../../../testdata/service/objectmodeling/dateobject.json";

/*
 * Object to be tested 
 */
let date : DateObject | undefined;

/**
 * Runs before each test 
 */
beforeAll(() => {
    date = new DateObject(testData.dateString);
})
/** 
 * Runs after all the tests
 */
afterAll(() => {
    date = undefined;
})

describe("DataObject.ts Test", () => {
    test("Testing constructor", () => {
        expect(date?.getId()).toBeDefined();
        expect(date?.hasId()).toBeTruthy();
    })

    test("Testing setId() and getId()", () =>{
        date?.setId(testData.id);
        expect(date?.getId()).toBe(testData.id);
    })

    test("Testing hasBuilder()", () => {
        expect(date?.hasBuilder()).toBeFalsy()
    })

    test("Testing getYear()", () => {
        expect(date?.getYear()).toBe(testData.year);
    })

    test("Testing getMonth()", () => {
        expect(date?.getMonth()).toBe(testData.month);
    })

    test("Testing getDay()", () => {
        expect(date?.getDay()).toBe(testData.day);
    })

    test("Testing getHours()", () => {
        expect(date?.getHours()).toBe(testData.hours);
    })

    test("Testing getMinutes()", () => {
        expect(date?.getMinutes()).toBe(testData.minutes);
    })

    test("Testing getSeconds()", () => {
        expect(date?.getSeconds()).toBe(testData.seconds);
    })
});
