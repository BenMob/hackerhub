/**
 * Tests the AccountStats.ts class
 */

import AccountStats from "../../../../src/service/objectmodels/AccountStats";
import testData from "../../../testdata/service/objectmodeling/accountstats.json";

/**
 * Object to be Tested
 */
let accountStats: AccountStats | undefined;

/**
 * Runs before each test 
 */
beforeEach(() => {
    accountStats = new AccountStats();
})
/** 
 * Runs after all the tests
 */
afterAll(() => {
    accountStats = undefined;
})

/**
 * AccountStats test suite
 */
describe("AccountStats Test", () => {
    test("Testing constructor", () => {
        expect(accountStats?.getId()).toBeDefined();
        expect(accountStats?.hasId()).toBeTruthy();
    })

    test("Testing setId() and getId()", () =>{
        accountStats?.setId(testData.id);
        expect(accountStats?.getId()).toBe(testData.id);
    })

    test("Testing setOwnerId() and getOwnerId()", () => {
        accountStats?.setOwnerId(testData.ownerId);
        expect(accountStats?.getOwnerId()).toBe(testData.ownerId);
    })

    test("Testing hasBuilder()", () => {
        expect(accountStats?.hasBuilder()).toBeFalsy()
    })

    test("Testing setPublicRepoCount() and getPublicRepoCount()", () => {
        accountStats?.setPublicRepoCount(testData.publicRepoCount);
        expect(accountStats?.getPublicRepoCount()).toBe(testData.publicRepoCount);
    })

    test("Testing setPublicGistCount() and getPublicGistCount()", () => {
        accountStats?.setPublicGistCount(testData.publicGistCount);
        expect(accountStats?.getPublicGistCount()).toBe(testData.publicGistCount);        
    })

    test("Testing setFollowerCount() and getFollowerCount()", () => {
        accountStats?.setFollowerCount(testData.followerCount);
        expect(accountStats?.getFollowerCount()).toBe(testData.followerCount);
    })

    test("Testing setFollowingCount() and getFollowingCount()", () => {
        accountStats?.setFollowingCount(testData.followingCount);
        expect(accountStats?.getFollowingCount()).toBe(testData.followingCount);
    })
})

export{}