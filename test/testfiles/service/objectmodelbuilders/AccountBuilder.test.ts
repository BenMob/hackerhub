/**
 * Tests the Account Builder
 */

import AccountBuilder from "../../../../src/service/objectmodelbuilders/AccountBuilder"
import Account from "../../../../src/service/objectmodels/Account";
import AccountStats from "../../../../src/service/objectmodels/AccountStats";
import DateObject from "../../../../src/service/objectmodels/DateObject";
import testData from "../../../testdata/service/objectbuilding/accountbuilder.json";

/**
 * Object to be Tested
 */
let accountBuilder: AccountBuilder | undefined;

/**
 * Runs before each test
 */
beforeEach(() => {
    accountBuilder = new AccountBuilder();
})

/**
 * Runs after each test
 */
afterEach(() => {
    accountBuilder = undefined;
})

/**
 * AccountBuilder test suite
 */

describe("AccountBuilder.ts Test", () => {
    test("Testing from() and buildObjectModel()", () => {

        // Build Account Object
        const account: Account = accountBuilder?.from(testData).buildObjectModel() as Account;

        // Tests the basic information
        expect(account.hasBuilder()).toBeTruthy();
        expect(account.hasId()).toBeTruthy();
        expect(account.getId()).toBeDefined();
        expect(account.getUsername()).toBe(testData.login);
        expect(account.getUserFullName()).toBe(testData.name);
        expect(account.getAvatarURL()).toBe(testData.avatar_url);
        expect(account.getCompany()).toBe(testData.company);
        expect(account.getBlogURL()).toBe(testData.blog);

        // Test the creation date
        const createdAt: DateObject | null = account.getCreationDate();
        const expectedCreationDate : DateObject = new DateObject(testData.created_at);
        expect(createdAt?.getYear()).toBe(expectedCreationDate.getYear());
        expect(createdAt?.getMonth()).toBe(expectedCreationDate.getMonth());
        expect(createdAt?.getDay()).toBe(expectedCreationDate.getDay());
        expect(createdAt?.getHours()).toBe(expectedCreationDate.getHours());
        expect(createdAt?.getMinutes()).toBe(expectedCreationDate.getMinutes());
        expect(createdAt?.getSeconds()).toBe(expectedCreationDate.getSeconds());
        
        // Tests the update date
        const updatedAt: DateObject | null = account.getLastUpdateDate();
        const expectedUpdateDate: DateObject = new DateObject(testData.updated_at);
        expect(updatedAt?.getYear()).toBe(expectedUpdateDate.getYear());
        expect(updatedAt?.getMonth()).toBe(expectedUpdateDate.getMonth());
        expect(updatedAt?.getDay()).toBe(expectedUpdateDate.getDay());
        expect(updatedAt?.getHours()).toBe(expectedUpdateDate.getHours());
        expect(updatedAt?.getMinutes()).toBe(expectedUpdateDate.getMinutes());
        expect(updatedAt?.getSeconds()).toBe(expectedUpdateDate.getSeconds());

        // Tests the Account stats
        const accountStats: AccountStats | null = account.getAccountStats() as AccountStats;
        expect(accountStats.getPublicRepoCount()).toBe(testData.public_repos);
        expect(accountStats.getPublicGistCount()).toBe(testData.public_gists);
        expect(accountStats.getFollowerCount()).toBe(testData.followers);
        expect(accountStats.getFollowingCount()).toBe(testData.following);

        // Tests repos
        expect(account.getPublicRepos()).toBeDefined();
    })
});

export{}