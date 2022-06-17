/**
 * Tests the Repo.ts class
 */

import Language from "../../../../src/service/objectmodels/Language";
import Repo from "../../../../src/service/objectmodels/Repo";
import testData from "../../../testdata/service/objectmodeling/repo.json";
import _ from "lodash";
import RepoStats from "../../../../src/service/objectmodels/RepoStats";
import DateObject from "../../../../src/service/objectmodels/DateObject";

/**
 * Object to be tested
 */
let repo: Repo | undefined;

/**
 * Runs before each test
 */
beforeEach(() => {
    repo = new Repo();
})

/** 
 * Runs after all the tests
 */
afterAll(() => {
    repo = undefined;
})

/**
 * Repo.ts test suite
 */
describe("Repo.ts Test", () => {
    test("Testing constructor", () => {
        expect(repo?.getId()).toBeDefined();
        expect(repo?.hasId()).toBeTruthy();
    })

    test("Testing setId() and getId()", () =>{
        repo?.setId(testData.id);
        expect(repo?.getId()).toBe(testData.id);
    })

    test("Testing hasBuilder()", () => {
        expect(repo?.hasBuilder()).toBeTruthy()
    })
    
    test("Testing setOwner() and getOwner()", () => {
        repo?.setOwner(testData.owner);
        expect(repo?.getOwner()).toBe(testData.owner);
    })

    test("Testing setOwnerAvatarURL() and getOwnerAvatarURL()", () => {
        repo?.setOwnerAvatarURL(testData.ownerAvatarURL);
        expect(repo?.getOwnerAvatarURL()).toBe(testData.ownerAvatarURL);
    })

    test("Testing setName() and getName()", () => {
        repo?.setName(testData.name);
        expect(repo?.getName()).toBe(testData.name);
    })

    test("Testing setDescription() and getDescription()", () => {
        repo?.setDescription(testData.description);
        expect(repo?.getDescription()).toBe(testData.description);
    })

    test("Testing setURL() and getURL()", () => {
        repo?.setURL(testData.url);
        expect(repo?.getUrl()).toBe(testData.url);
    })

    test("Testing setWebsiteURL() and getWebsiteURL()", () => {
        repo?.setWebsiteURL(testData.websiteURL);
        expect(repo?.getWebsiteUrl()).toBe(testData.websiteURL);       
    })
    
    test("Testing setCreationDate() and getCreationDate()", () => {

        // Test with Date String as input
        repo?.setCreationDate(testData.createdAt.input);
        let createdAt : DateObject | undefined = repo?.getCreationDate() as DateObject;
        expect(createdAt.getYear()).toBe(testData.createdAt.expectedYear);
        expect(createdAt.getMonth()).toBe(testData.createdAt.expectedMonth);
        expect(createdAt.getDay()).toBe(testData.createdAt.expectedDay);
        expect(createdAt.getHours()).toBe(testData.createdAt.expectedHours);
        expect(createdAt.getMinutes()).toBe(testData.createdAt.expectedMinutes);
        expect(createdAt.getSeconds()).toBe(testData.createdAt.expectedSeconds);

        // Reinitialize the repo Object
        repo = new Repo();

        // Test with DateObject as input
        repo?.setCreationDate(new DateObject(testData.createdAt.input));
        createdAt = repo?.getCreationDate() as DateObject;
        expect(createdAt.getYear()).toBe(testData.createdAt.expectedYear);
        expect(createdAt.getMonth()).toBe(testData.createdAt.expectedMonth);
        expect(createdAt.getDay()).toBe(testData.createdAt.expectedDay);
        expect(createdAt.getHours()).toBe(testData.createdAt.expectedHours);
        expect(createdAt.getMinutes()).toBe(testData.createdAt.expectedMinutes);
        expect(createdAt.getSeconds()).toBe(testData.createdAt.expectedSeconds);
    })

    test("Testing setPushDate() and getPushDate()", () => {
          // Test with Date String as input
        repo?.setPushDate(testData.pushedAt.input);
        let pushedAt : DateObject | undefined = repo?.getPushDate() as DateObject;
        expect(pushedAt.getYear()).toBe(testData.pushedAt.expectedYear);
        expect(pushedAt.getMonth()).toBe(testData.pushedAt.expectedMonth);
        expect(pushedAt.getDay()).toBe(testData.pushedAt.expectedDay);
        expect(pushedAt.getHours()).toBe(testData.pushedAt.expectedHours);
        expect(pushedAt.getMinutes()).toBe(testData.pushedAt.expectedMinutes);
        expect(pushedAt.getSeconds()).toBe(testData.pushedAt.expectedSeconds);

        // Reinitialize the repo Object
        repo = new Repo();

        // Test with DateObject as input
        repo?.setPushDate(new DateObject(testData.pushedAt.input));
        pushedAt = repo?.getPushDate() as DateObject;
        expect(pushedAt.getYear()).toBe(testData.pushedAt.expectedYear);
        expect(pushedAt.getMonth()).toBe(testData.pushedAt.expectedMonth);
        expect(pushedAt.getDay()).toBe(testData.pushedAt.expectedDay);
        expect(pushedAt.getHours()).toBe(testData.pushedAt.expectedHours);
        expect(pushedAt.getMinutes()).toBe(testData.pushedAt.expectedMinutes);
        expect(pushedAt.getSeconds()).toBe(testData.pushedAt.expectedSeconds);
    })

    test("Testing setLastUpdateDate() and getLastUpdateDate()", () => {
        // Test with Date String as input
        repo?.setLastUpdateDate(testData.updatedAt.input);
        let updatedAt : DateObject | undefined = repo?.getLastUpdateDate() as DateObject;
        expect(updatedAt.getYear()).toBe(testData.updatedAt.expectedYear);
        expect(updatedAt.getMonth()).toBe(testData.updatedAt.expectedMonth);
        expect(updatedAt.getDay()).toBe(testData.updatedAt.expectedDay);
        expect(updatedAt.getHours()).toBe(testData.updatedAt.expectedHours);
        expect(updatedAt.getMinutes()).toBe(testData.updatedAt.expectedMinutes);
        expect(updatedAt.getSeconds()).toBe(testData.updatedAt.expectedSeconds);
        
        // Reinitialize the repo Object
        repo = new Repo();

        // Test with DateObject as input
        repo?.setLastUpdateDate(new DateObject(testData.updatedAt.input));
        updatedAt = repo?.getLastUpdateDate() as DateObject;
        expect(updatedAt.getYear()).toBe(testData.updatedAt.expectedYear);
        expect(updatedAt.getMonth()).toBe(testData.updatedAt.expectedMonth);
        expect(updatedAt.getDay()).toBe(testData.updatedAt.expectedDay);
        expect(updatedAt.getHours()).toBe(testData.updatedAt.expectedHours);
        expect(updatedAt.getMinutes()).toBe(testData.updatedAt.expectedMinutes);
        expect(updatedAt.getSeconds()).toBe(testData.updatedAt.expectedSeconds);
    })

    test("Testing setLanguages() and getLanguages()", () => {
        const languages: Array<Language> = testData.languages.map(languageObject => {
            const language : Language = new Language(languageObject.name);
            language.setId(languageObject.id);
            language.setLineCount(languageObject.lineCount);
            return language;
        });

        repo?.setLanguages(languages);
        expect(_.isEqual(repo?.getLanguages(), languages)).toBeTruthy();
    })

    test("Testing setRepoStats() and getReposStats()", () => {
        const repoStats : RepoStats = new RepoStats();
        repoStats.setId(testData.id);
        repoStats.setSize(testData.repoStats.size)
        .setOpenIssueCount(testData.repoStats.openIssueCount)
        .setWatcherCount(testData.repoStats.watcherCount)
        .setForkCount(testData.repoStats.forkCount)
        .setLanguageCount(testData.repoStats.languageCount)
        .setOwnerId(repo?.getId()!);

        repo?.setRepoStats(repoStats);
        expect(_.isEqual(repo?.getRepoStats(), repoStats)).toBeTruthy();
    })
})

export{}