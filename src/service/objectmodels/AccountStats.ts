/**
 * The Account Stats Class
 */

import AbstractStats from "./AbstractStats";

class AccountStats extends AbstractStats{

    /*
     * Attributes
     */
    private publicRepoCount: number = 0;
    private publicGistCount: number = 0;
    private followerCount: number = 0;
    private followingCount: number = 0;

    /**
     * Constructor
     */
    constructor(){
        super()
    }

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

    /*
     * Getters 
     */
    public getPublicRepoCount(): number{
        return this.publicRepoCount;
    }

    public getPublicGistCount(): number{
        return this.publicGistCount;
    }

    public getFollowerCount(): number{
        return this.followerCount;
    }

    public getFollowingCount(): number{
        return this.followingCount;
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