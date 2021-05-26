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
        this.setSize(size);
        return this;
    }

    public setOpenIssueCount(size: number): RepoStats{
        this.setOpenIssueCount(size);
        return this;
    }

    public setWatcherCount(size: number): RepoStats{
        this.setWatcherCount(size);
        return this;
    }

    public setForkCount(size: number): RepoStats{
        this.setForkCount(size);
        return this;
    }

    public setLanguageCount(size: number): RepoStats{
        this.setLanguageCount(size);
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