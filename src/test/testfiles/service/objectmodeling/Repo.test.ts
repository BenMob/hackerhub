/**
 * Tests the Repo.ts class
 */

import Language from "../../../../service/objectmodeling/Language";
import Repo from "../../../../service/objectmodeling/Repo";
import testData from "../../../testdata/service/objectmodeling/Repo.json";
import _ from "lodash";
import RepoStats from "../../../../service/objectmodeling/RepoStats";

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
    
    test("Testing setCreatedAt() and getCreatedAt()", () => {
        // TODO : Implement this
    })

    test("Testing setPushedAt() and getPushedAt()", () => {
         // TODO : Implement this
    })

    test("Testing setUpdatedAt() and getUpdatedAt()", () => {
         // TODO : Implement this
    })

    test("Testing setLanguages() and getLanguages()", () => {
        const languages: Array<Language> = testData.languages.map(languageObject => {
            const language : Language = new Language(languageObject.name);
            language.setId(languageObject.id);
            language.setLineCount(languageObject.lineCount);
            language.setColor(languageObject.color);
            return language;
        });

        repo?.setLanguages(languages);
        expect(_.isEqual(repo?.getLanguages(), languages)).toBeTruthy();
    })

    test("Testing setRepoStats() and getReposStats()", () => {
        const repoStats : RepoStats = new RepoStats();
        repoStats.setSize(testData.repoStats.size)
        .setOpenIssueCount(testData.repoStats.openIssueCount)
        .setWatcherCount(testData.repoStats.watcherCount)
        .setForkCount(testData.repoStats.forkCount)
        .setLanguageCount(testData.repoStats.languageCount);

        repo?.setRepoStats(repoStats);
        expect(_.isEqual(repo?.getRepoStats(), repoStats)).toBeTruthy();
    })
})

export{}