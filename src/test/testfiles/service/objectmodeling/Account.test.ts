/**
 * Tests the Account.ts class
 */

import Account from "../../../../service/objectmodeling/Account";
import AccountStats from "../../../../service/objectmodeling/AccountStats";
import testData from "../../../testdata/service/objectmodeling/account.json";
import _ from "lodash";
import Repo from "../../../../service/objectmodeling/Repo";
import Language from "../../../../service/objectmodeling/Language";
import RepoStats from "../../../../service/objectmodeling/RepoStats";

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
                language.setColor(languageObject.color);
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
            
            /**
             * TODO: Add Dates here
             */
            repo.setLanguages(languages)
            .setRepoStats(repoStats);
            
            return repo;
        })

        expect(_.isEqual(account?.getPublicRepos(), publicRepos));
    })
});

export{}