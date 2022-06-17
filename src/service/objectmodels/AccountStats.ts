/**
 * The Account Stats Class
 */

import AbstractStats from "./AbstractStats";

class AccountStats extends AbstractStats{

    /*
     * Attributes
     */
    private publicRepoCount: number | null = null;
    private publicGistCount: number | null = null;
    private followerCount: number | null = null;
    private followingCount: number | null = null;

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
    public getPublicRepoCount(): number  | null{
        return this.publicRepoCount;
    }

    public getPublicGistCount(): number | null{
        return this.publicGistCount;
    }

    public getFollowerCount(): number | null{
        return this.followerCount;
    }

    public getFollowingCount(){
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