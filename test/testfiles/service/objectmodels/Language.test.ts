/**
 * Tests the Language.ts class
 */

import Language from "../../../../src/service/objectmodels/Language";
import testData from "../../../testdata/service/objectmodeling/language.json"

/**
 * Object to be tested
 */
let language: Language | undefined;

/**
 * Runs before each test
 */
beforeEach(() => {
    language = new Language(testData.name);
})

/**
 * Runs after all test
 */
afterAll(() => {
    language = undefined;
})

describe("Language.ts Test", () => {
    test("Testing constructor(name: String)", () => {
        expect(language?.getName()).toBe(testData.name);
        expect(language?.getId()).toBeDefined();
        expect(language?.hasId()).toBeTruthy();
    });

    test("Testing hasBuilder()", () => {
        expect(language?.hasBuilder()).toBeFalsy();
    })

    test("Testing setId() and getId()", () =>{
        language?.setId(testData.id);
        expect(language?.getId()).toBe(testData.id);
    })

    test("Testing setLineCount() and getLineCount()", () => {
        language?.setLineCount(testData.lineCount);
        expect(language?.getLineCount()).toBe(testData.lineCount);
    })
});

export{}