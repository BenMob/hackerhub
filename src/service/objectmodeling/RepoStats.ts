/**
 * This is the RepoStats Class
 */

import AbstractStats from "./AbstractStats";

class RepoStats extends AbstractStats{

    /*
     * Attributes 
     */
    private size: number | undefined;
    private openIssueCount: number | undefined
    private watcherCount: number | undefined
    private forkCount: number | undefined
    private languageCount: number | undefined

    /**
     * Setters 
     */
    public setSize(size: number): RepoStats{
        this.size = size;
        return this;
    }

    public setOpenIssueCount(count: number): RepoStats{
        this.openIssueCount = count;
        return this;
    }

    public setWatcherCount(count: number): RepoStats{
        this.watcherCount = count;
        return this;
    }

    public setForkCount(count: number): RepoStats{
        this.forkCount = count;
        return this;
    }

    public setLanguageCount(count: number): RepoStats{
        this.languageCount = count;
        return this;
    }

    /**
     * Getters
     */
    public getSize(): number | undefined{
        return this.size;
    }

    public getOpenIssueCount(): number | undefined{
        return this.openIssueCount;
    }

    public getWatcherCount(): number | undefined{
        return this.watcherCount;
    }

    public getForkCount(): number | undefined{
        return this.forkCount;
    }

    public getLanguageCount(): number | undefined{
        return this.languageCount;
    }


    /**
     * Determines whether there exist a Builder Object for this Object
     * @returns 
     */
    public hasBuilder(): boolean {
        return false;
    }
}

export default RepoStats;