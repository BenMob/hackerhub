/**
 * The Account Stats Class
 */

import AbstractStats from "./AbstractStats";

class AccountStats extends AbstractStats{

    /*
     * Attributes
     */
    private publicRepoCount: number | undefined;
    private publicGistCount: number | undefined;
    private followerCount: number | undefined;
    private followingCount: number | undefined;
    private repositoryCount: number | undefined; 

    /**
     * Setters 
     */
    public setPublicRepoCount(count: number): AccountStats{
        this.publicRepoCount = count;
        return this;
    }

    public setPublicGistCount(count: number): AccountStats{
        this.publicGistCount = count;
        return this;
    }

    public setFollowerCount(count: number): AccountStats{
        this.followerCount = count;
        return this;
    }

    public setFollowingCount(count: number): AccountStats{
        this.followingCount = count;
        return this;
    }

    public setRepositoryCount(count: number): AccountStats{
        this.repositoryCount = count;
        return this
    }

    /*
     * Getters 
     */
    public getPublicRepoCount(): number  | undefined{
        return this.publicRepoCount;
    }

    public getPublicGistCount(): number | undefined{
        return this.publicGistCount;
    }

    public getFollowerCount(): number | undefined{
        return this.followerCount;
    }

    public getFollowingCount(){
        return this.followingCount;
    }

    public getRepositoryCount(){
        return this.repositoryCount;
    }

    /**
     * Determines whether there exist a Builder Object for this Object
     * @returns 
     */
    public hasBuilder(): boolean {
        return false;
    }
}

export default AccountStats