/**
 * Tests the Account.ts class
 */

import Account from "../../../../service/objectmodeling/Account";
import testData from "../../../testdata/service/objectmodeling/account.json"

/**
 * Object to be tested
 */
let account: Account | undefined;

/**
 * Runs before each test 
 */
beforeEach(() => {
    account = new Account();
})
/** 
 * Runs after all the tests
 */
afterAll(() => {
    account = undefined;
})

/**
 * Account.ts test suite
 */
describe("Account.ts Test", () => {
    test("Testing constructor", () => {
        expect(account?.getId()).toBeDefined();
        expect(account?.hasId()).toBeTruthy();
    })

    test("Testing setId() and getId()", () =>{
        account?.setId(testData.id);
        expect(account?.getId()).toBe(testData.id);
    })

    test("Testing hasBuilder()", () => {
        expect(account?.hasBuilder()).toBeTruthy()
    })

    test("Testing getUsername() and setUsername()", () => {
        account?.setUsername(testData.username);
        expect(account?.getUsername()).toBe(testData.username);
    });

    test("Testing getUserFullName() and setUserFullName()", () => {
        account?.setUserFullName(testData.userFullName);
        expect(account?.getUserFullName()).toBe(testData.userFullName);
    });

    test("Testing getAvatarURL() and setAvatarURL()", () => {
        account?.setAvatarURL(testData.avatarUrl);
        expect(account?.getAvatarURL()).toBe(testData.avatarUrl);
    })

    test("Testing getCompany() and setCompany()", () => {
        account?.setCompany(testData.company);
        expect(account?.getCompany()).toBe(testData.company);
    })

    test("Testing getBlogURL() and setBlogURL()", () => {
        account?.setBlogURL(testData.blogURL);
        expect(account?.getBlogURL()).toBe(testData.blogURL);
    })
});

export{}