/**
 * Tests the Account.ts class
 */

import Account from "../../../../src/service/objectmodels/Account";
import AccountStats from "../../../../src/service/objectmodels/AccountStats";
import testData from "../../../testdata/service/objectmodeling/account.json";
import _ from "lodash";
import Repo from "../../../../src/service/objectmodels/Repo";
import Language from "../../../../src/service/objectmodels/Language";
import RepoStats from "../../../../src/service/objectmodels/RepoStats";
import DateObject from "../../../../src/service/objectmodels/DateObject";

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

    test("Testing getCreationDate() and setCreationDate()",  () => {
        // Test with Date String as input
        account?.setCreationDate(testData.createdAt.input);
        let createdAt : DateObject | undefined = account?.getCreationDate() as DateObject;
        expect(createdAt.getYear()).toBe(testData.createdAt.expectedYear);
        expect(createdAt.getMonth()).toBe(testData.createdAt.expectedMonth);
        expect(createdAt.getDay()).toBe(testData.createdAt.expectedDay);
        expect(createdAt.getHours()).toBe(testData.createdAt.expectedHours);
        expect(createdAt.getMinutes()).toBe(testData.createdAt.expectedMinutes);
        expect(createdAt.getSeconds()).toBe(testData.createdAt.expectedSeconds);

        // Reinitialize the account Object
        account = new Account();

        // Test with DateObject as input
        account?.setCreationDate(new DateObject(testData.createdAt.input));
        createdAt = account?.getCreationDate() as DateObject;
        expect(createdAt.getYear()).toBe(testData.createdAt.expectedYear);
        expect(createdAt.getMonth()).toBe(testData.createdAt.expectedMonth);
        expect(createdAt.getDay()).toBe(testData.createdAt.expectedDay);
        expect(createdAt.getHours()).toBe(testData.createdAt.expectedHours);
        expect(createdAt.getMinutes()).toBe(testData.createdAt.expectedMinutes);
        expect(createdAt.getSeconds()).toBe(testData.createdAt.expectedSeconds);
    })

    test("Testing getLastUpdateDate() and setLastUpdateDate()",  () => {
        // Test with Date String as input
        account?.setLastUpdateDate(testData.updatedAt.input);
        let updatedAt : DateObject | undefined = account?.getLastUpdateDate() as DateObject;
        expect(updatedAt.getYear()).toBe(testData.updatedAt.expectedYear);
        expect(updatedAt.getMonth()).toBe(testData.updatedAt.expectedMonth);
        expect(updatedAt.getDay()).toBe(testData.updatedAt.expectedDay);
        expect(updatedAt.getHours()).toBe(testData.updatedAt.expectedHours);
        expect(updatedAt.getMinutes()).toBe(testData.updatedAt.expectedMinutes);
        expect(updatedAt.getSeconds()).toBe(testData.updatedAt.expectedSeconds);

        // Reinitialize the account Object
        account = new Account();

        // Test with DateObject as input
        account?.setLastUpdateDate(new DateObject(testData.updatedAt.input));
        updatedAt = account?.getLastUpdateDate() as DateObject;
        expect(updatedAt.getYear()).toBe(testData.updatedAt.expectedYear);
        expect(updatedAt.getMonth()).toBe(testData.updatedAt.expectedMonth);
        expect(updatedAt.getDay()).toBe(testData.updatedAt.expectedDay);
        expect(updatedAt.getHours()).toBe(testData.updatedAt.expectedHours);
        expect(updatedAt.getMinutes()).toBe(testData.updatedAt.expectedMinutes);
        expect(updatedAt.getSeconds()).toBe(testData.updatedAt.expectedSeconds);
    })

    test("Testing setAccountStats() and getAccountStats()", () => {
        const accounStats: AccountStats = new AccountStats();
        accounStats.setId(testData.accountStats.id);
        accounStats.setPublicRepoCount(testData.accountStats.publicRepoCount)
        .setPublicGistCount(testData.accountStats.publicGistCount)
        .setFollowerCount(testData.accountStats.followerCount)
        .setFollowingCount(testData.accountStats.followingCount)
        .setOwnerId(account?.getId()!);
        
        account?.setAccountStats(accounStats);
        expect(_.isEqual(account?.getAccountStats(), accounStats)).toBeTruthy();
    })

    test("Testing setPublicRepos() and getPublicRepos()", () => {
        const publicRepos: Array<Repo> = testData.publicRepos.map(repoObject => {

            // Creates Languages Array
            const languages: Array<Language> = repoObject.languages.map(languageObject => {

                // Creates single nlanguage Object
                const language: Language = new Language(languageObject.name);
                language.setId(languageObject.id);
                language.setLineCount(languageObject.lineCount)
                return language;
            })

            // Creating AccountStats Object
            const repoStats: RepoStats = new RepoStats();
            repoStats.setSize(repoObject.repoStats.size)
            .setOpenIssueCount(repoObject.repoStats.openIssueCount)
            .setWatcherCount(repoObject.repoStats.watcherCount)
            .setForkCount(repoObject.repoStats.forkCount)
            .setLanguageCount(repoObject.repoStats.languageCount)
            .setOwnerId(repoObject.repoStats.ownerId);

            // Creating the repo
            const repo = new Repo();
            repo.setId(repoObject.id)
            repo.setOwner(repoObject.owner)
            .setOwnerAvatarURL(repoObject.ownerAvatarURL)
            .setName(repoObject.name)
            .setDescription(repoObject.description)
            .setURL(repoObject.url)
            .setWebsiteURL(repoObject.websiteURL)
            .setCreationDate(repoObject.createdAt)
            .setPushDate(repoObject.pushedAt)
            .setLastUpdateDate(repoObject.updatedAt)
            .setLanguages(languages)
            .setRepoStats(repoStats);
            
            return repo;
        })

        // Setting the publicRepos
        account?.setPublicRepos(publicRepos);

        expect(account?.getPublicRepos()![0].getId()).toBe(testData.publicRepos[0].id);
        expect(account?.getPublicRepos()![1].getId()).toBe(testData.publicRepos[1].id);
    })
});

export{}