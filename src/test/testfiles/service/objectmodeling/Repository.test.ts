/**
 * Tests the Repository.ts class
 */

import Language from "../../../../service/objectmodeling/Language";
import Repository from "../../../../service/objectmodeling/Repository";
import testData from "../../../testdata/service/objectmodeling/repository.json";
import _ from "lodash";
import RepoStats from "../../../../service/objectmodeling/RepoStats";

/**
 * Object to be tested
 */
let repository: Repository | undefined;

/**
 * Runs before each test
 */
beforeEach(() => {
    repository = new Repository();
})

/** 
 * Runs after all the tests
 */
afterAll(() => {
    repository = undefined;
})

/**
 * Repository.ts test suite
 */
describe("Repository.ts Test", () => {
    test("Testing constructor", () => {
        expect(repository?.getId()).toBeDefined();
        expect(repository?.hasId()).toBeTruthy();
    })

    test("Testing setId() and getId()", () =>{
        repository?.setId(testData.id);
        expect(repository?.getId()).toBe(testData.id);
    })

    test("Testing hasBuilder()", () => {
        expect(repository?.hasBuilder()).toBeTruthy()
    })
    
    test("Testing setOwner() and getOwner()", () => {
        repository?.setOwner(testData.owner);
        expect(repository?.getOwner()).toBe(testData.owner);
    })

    test("Testing setOwnerAvatarURL() and getOwnerAvatarURL()", () => {
        repository?.setOwnerAvatarURL(testData.ownerAvatarURL);
        expect(repository?.getOwnerAvatarURL()).toBe(testData.ownerAvatarURL);
    })

    test("Testing setName() and getName()", () => {
        repository?.setName(testData.name);
        expect(repository?.getName()).toBe(testData.name);
    })

    test("Testing setDescription() and getDescription()", () => {
        repository?.setDescription(testData.description);
        expect(repository?.getDescription()).toBe(testData.description);
    })

    test("Testing setURL() and getURL()", () => {
        repository?.setURL(testData.url);
        expect(repository?.getUrl()).toBe(testData.url);
    })

    test("Testing setWebsiteURL() and getWebsiteURL()", () => {
        repository?.setWebsiteURL(testData.websiteURL);
        expect(repository?.getWebsiteUrl()).toBe(testData.websiteURL);       
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

        repository?.setLanguages(languages);
        expect(_.isEqual(repository?.getLanguages(), languages)).toBeTruthy();
    })

    test("Testing setRepoStats() and getReposStats()", () => {
        const repoStats : RepoStats = new RepoStats();
        repoStats.setSize(testData.repoStats.size)
        .setOpenIssueCount(testData.repoStats.openIssueCount)
        .setWatcherCount(testData.repoStats.watcherCount)
        .setForkCount(testData.repoStats.forkCount)
        .setLanguageCount(testData.repoStats.languageCount);

        repository?.setRepoStats(repoStats);
        expect(_.isEqual(repository?.getRepoStats(), repoStats)).toBeTruthy();
    })
})

export{}