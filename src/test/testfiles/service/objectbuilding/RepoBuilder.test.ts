/**
 * Tests Repository Builder
 */

import RepoBuilder from "../../../../service/objectbuilding/RepoBuilder";
import DateObject from "../../../../service/objectmodeling/DateObject";
import Language from "../../../../service/objectmodeling/Language";
import Repo from "../../../../service/objectmodeling/Repo";
import RepoStats from "../../../../service/objectmodeling/RepoStats";
import testData from "../../../testdata/service/objectbuilding/repobuilder.json";

/**
 * Object to be tested
 */
let repositoryBuilder: RepoBuilder | undefined;

/**
 * Runs before each test.
 */
beforeEach(() => {
    repositoryBuilder = new RepoBuilder();
})

/**
 * Runs after each test.
 */
afterEach(() => {
    repositoryBuilder = undefined;
})

/**
 * RepositoryBuilder test suite
 */
describe("RepositoryBuilder.ts Test", () => {
    test("Testing from() and buildObjectModel()", () => {
        
        // Build Repo Object
        const repo: Repo | undefined = repositoryBuilder?.from(testData).buildObjectModel() as Repo;

        // Tests the basic information
        expect(repo.hasBuilder()).toBeTruthy();
        expect(repo.hasId()).toBeTruthy();
        expect(repo.getId()).toBeDefined();
        expect(repo.getOwner()).toBe(testData.owner.id);
        expect(repo.getOwnerAvatarURL()).toBe(testData.owner.avatar_url);
        expect(repo.getName()).toBe(testData.name);
        expect(repo.getDescription()).toBe(testData.description);
        expect(repo.getUrl()).toBe(testData.html_url);
        expect(repo.getWebsiteUrl()).toBe(testData.homepage);

        // Tests the creation date
        const createdAt : DateObject | undefined = repo.getCreationDate();
        const expectedCreationDate : DateObject | undefined = new DateObject(testData.created_at);
        expect(createdAt?.getYear()).toBe(expectedCreationDate.getYear());
        expect(createdAt?.getMonth()).toBe(expectedCreationDate.getMonth());
        expect(createdAt?.getDay()).toBe(expectedCreationDate.getDay());
        expect(createdAt?.getHours()).toBe(expectedCreationDate.getHours());
        expect(createdAt?.getMinutes()).toBe(expectedCreationDate.getMinutes());
        expect(createdAt?.getSeconds()).toBe(expectedCreationDate.getSeconds());

        // Tests the pushed date
        const pushedAt: DateObject | undefined = repo.getPushDate();
        const expectedPushDate: DateObject | undefined = new DateObject(testData.pushed_at);
        expect(pushedAt?.getYear()).toBe(expectedPushDate.getYear());
        expect(pushedAt?.getMonth()).toBe(expectedPushDate.getMonth());
        expect(pushedAt?.getDay()).toBe(expectedPushDate.getDay());
        expect(pushedAt?.getHours()).toBe(expectedPushDate.getHours());
        expect(pushedAt?.getMinutes()).toBe(expectedPushDate.getMinutes());
        expect(pushedAt?.getSeconds()).toBe(expectedPushDate.getSeconds());
        
        // Tests the update date
        const updatedAt: DateObject | undefined = repo.getLastUpdateDate();
        const expectedUpdateDate: DateObject | undefined = new DateObject(testData.updated_at);
        expect(updatedAt?.getYear()).toBe(expectedUpdateDate.getYear());
        expect(updatedAt?.getMonth()).toBe(expectedUpdateDate.getMonth());
        expect(updatedAt?.getDay()).toBe(expectedUpdateDate.getDay());
        expect(updatedAt?.getHours()).toBe(expectedUpdateDate.getHours());
        expect(updatedAt?.getMinutes()).toBe(expectedUpdateDate.getMinutes());
        expect(updatedAt?.getSeconds()).toBe(expectedUpdateDate.getSeconds());

        // Tests languages
        const languages: Array<Language> | undefined = repo.getLanguages(); 
        expect(languages![0].getName()).toBe(testData.languages[0].name);
        expect(languages![0].getLineCount()).toBe(testData.languages[0].lineCount);
        expect(languages![1].getName()).toBe(testData.languages[1].name);
        expect(languages![1].getLineCount()).toBe(testData.languages[1].lineCount);
        expect(languages![2].getName()).toBe(testData.languages[2].name);
        expect(languages![2].getLineCount()).toBe(testData.languages[2].lineCount);

        // Test RepoStats
        const repoStats: RepoStats | undefined = repo.getRepoStats();
        expect(repoStats?.getSize()).toBe(testData.size);
        expect(repoStats?.getOpenIssueCount()).toBe(testData.open_issues_count);
        expect(repoStats?.getWatcherCount()).toBe(testData.watchers_count);
        expect(repoStats?.getForkCount()).toBe(testData.forks_count);
        expect(repoStats?.getLanguageCount()).toBe(languages?.length);
        expect(repoStats?.getOwnerId()).toBe(repo.getId());
    })
});


export{}