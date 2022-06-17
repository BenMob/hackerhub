/**
 * Testing the UserNotFound class
 */

import IError from "../../../../src/abstraction/IError";
import UserNotFound from "../../../../src/service/exceptionhandlers/UserNotFound";
import testData from "../../../testdata/service/exceptionhandling/usernotfound.json"

/**
 * UserNotFound.ts test suite
 */
describe("Tests UserNotFound.ts", () => {
    test("Testing getMessage()", () => {
        const error: IError = new UserNotFound(testData.message);
        expect(error.getMessage()).toBe(testData.message);
    }) 
});

export{}