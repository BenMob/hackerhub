/**
 * Tests RepoStats.ts class
 */

import RepoStats from "../../../../service/objectmodeling/RepoStats";
import testData from "../../../testdata/service/objectmodeling/repostats.json";

/**
 * Object to be tested
 */
let repoStats : RepoStats | undefined;

/**
 * Runs before each test 
 */
beforeEach(() => {
    repoStats = new RepoStats();
})
/** 
 * Runs after all the tests
 */
afterAll(() => {
    repoStats = undefined;
})

describe("RepoStats Test", () => {
    test("Testing constructor", () => {
        expect(repoStats?.getId()).toBeDefined();
        expect(repoStats?.hasId()).toBeTruthy();
    })

    test("Testing setId() and getId()", () =>{
        repoStats?.setId(testData.id);
        expect(repoStats?.getId()).toBe(testData.id);
    })

    test("Testing setOwnerId() and getOwnerId()", () => {
        repoStats?.setOwnerId(testData.ownerId);
        expect(repoStats?.getOwnerId()).toBe(testData.ownerId);
    })

    test("Testing hasBuilder()", () => {
        expect(repoStats?.hasBuilder()).toBeFalsy()
    })
    
    test("Testing setSize() and getSize()", () => {
        repoStats?.setSize(testData.size);
        expect(repoStats?.getSize()).toBe(testData.size);
    })

    test("Testing setOpenIssueCount() and getOpenIssueCount()", () => {
        repoStats?.setOpenIssueCount(testData.openIssueCount);
        expect(repoStats?.getOpenIssueCount()).toBe(testData.openIssueCount);
    })

    test("Testing setWatcherCount() and getWatcherCount()", () => {
        repoStats?.setWatcherCount(testData.watcherCount);
        expect(repoStats?.getWatcherCount()).toBe(testData.watcherCount);
    })

    test("Testing setForkCount() and getForkCount()", () => {
        repoStats?.setForkCount(testData.forkCount);
        expect(repoStats?.getForkCount()).toBe(testData.forkCount);
    })

    test("Testing setLanguageCount and getLanguageCount()", () => {
        repoStats?.setLanguageCount(testData.languageCount);
        expect(repoStats?.getLanguageCount()).toBe(testData.languageCount);
    })
});

export{}