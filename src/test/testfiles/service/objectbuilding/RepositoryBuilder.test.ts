/**
 * Tests Repository Builder
 */

import RepositoryBuilder from "../../../../service/objectbuilding/RepositoryBuilder";
import DateObject from "../../../../service/objectmodeling/DateObject";
import Language from "../../../../service/objectmodeling/Language";
import Repo from "../../../../service/objectmodeling/Repo";
import RepoStats from "../../../../service/objectmodeling/RepoStats";
import testData from "../../../testdata/service/objectbuilding/repositorybuilder.json";

/**
 * Object to be tested
 */
let repositoryBuilder: RepositoryBuilder | undefined;

/**
 * Runs before each test.
 */
beforeEach(() => {
    repositoryBuilder = new RepositoryBuilder();
})

/**
 * Runs after each test.
 */
afterEach(() => {
    repositoryBuilder = undefined;
})

/**
 * RepositoryBuilder test Suite
 */
describe("RepositoryBuilder.ts Test", () => {
    test("Testing from() and buildObjectModel()", () => {
        const repo: Repo | undefined = repositoryBuilder?.from(testData).buildObjectModel() as Repo;

        expect(repo.hasBuilder()).toBeTruthy();
        expect(repo.hasId()).toBeTruthy();
        expect(repo.getId()).toBeDefined();
        expect(repo.getOwner()).toBe(testData.owner);
        expect(repo.getOwnerAvatarURL()).toBe(testData.ownerAvatarURL);
        expect(repo.getName()).toBe(testData.name);
        expect(repo.getDescription()).toBe(testData.description);
        expect(repo.getWebsiteUrl()).toBe(testData.url);

        const createdAt : DateObject | undefined = repo.getCreationDate();
        expect(createdAt?.getYear()).toBe(testData.createdAt.expectedYear);
        expect(createdAt?.getMonth()).toBe(testData.createdAt.expectedMonth);
        expect(createdAt?.getDay()).toBe(testData.createdAt.expectedDay);
        expect(createdAt?.getHours()).toBe(testData.createdAt.expectedHours);
        expect(createdAt?.getMinutes()).toBe(testData.createdAt.expectedMinutes);
        expect(createdAt?.getSeconds()).toBe(testData.createdAt.expectedSeconds);

        const pushedAt: DateObject | undefined = repo.getPushDate();
        expect(pushedAt?.getYear()).toBe(testData.pushedAt.expectedYear);
        expect(pushedAt?.getMonth()).toBe(testData.pushedAt.expectedMonth);
        expect(pushedAt?.getDay()).toBe(testData.pushedAt.expectedDay);
        expect(pushedAt?.getHours()).toBe(testData.pushedAt.expectedHours);
        expect(pushedAt?.getMinutes()).toBe(testData.pushedAt.expectedMinutes);
        expect(pushedAt?.getSeconds()).toBe(testData.pushedAt.expectedSeconds);
        
        const updatedAt: DateObject | undefined = repo.getLastUpdateDate();
        expect(updatedAt?.getYear()).toBe(testData.updatedAt.expectedYear);
        expect(updatedAt?.getMonth()).toBe(testData.updatedAt.expectedMonth);
        expect(updatedAt?.getDay()).toBe(testData.updatedAt.expectedDay);
        expect(updatedAt?.getHours()).toBe(testData.updatedAt.expectedHours);
        expect(updatedAt?.getMinutes()).toBe(testData.updatedAt.expectedMinutes);
        expect(updatedAt?.getSeconds()).toBe(testData.updatedAt.expectedSeconds);

        const languages: Array<Language> | undefined = repo.getLanguages(); 
        expect(languages![0].getName()).toBe(testData.languages[0].name);
        expect(languages![0].getLineCount()).toBe(testData.languages[0].lineCount);
        expect(languages![0].getColor()).toBe(testData.languages[0].color);
        expect(languages![1].getName()).toBe(testData.languages[1].name);
        expect(languages![1].getLineCount()).toBe(testData.languages[1].lineCount);
        expect(languages![1].getColor()).toBe(testData.languages[1].color);
        expect(languages![2].getName()).toBe(testData.languages[2].name);
        expect(languages![2].getLineCount()).toBe(testData.languages[2].lineCount);
        expect(languages![2].getColor()).toBe(testData.languages[2].color);

        const repoStats: RepoStats | undefined = repo.getRepoStats();
        expect(repoStats?.getSize()).toBe(testData.repoStats.size);
        expect(repoStats?.getOpenIssueCount()).toBe(testData.repoStats.openIssueCount);
        expect(repoStats?.getWatcherCount()).toBe(testData.repoStats.watcherCount);
        expect(repoStats?.getForkCount()).toBe(testData.repoStats.forkCount);
        expect(repoStats?.getLanguageCount()).toBe(languages?.length);
        expect(repoStats?.getOwnerId()).toBe(repo.getId());
    })
});


export{}