/**
 * This is the account class
 */

import AbstractObjectModel from "./AbstractObjectModel";
import AbstractStats from "./AbstractStats";

class Account extends AbstractObjectModel{

    /*
     * Attributes
     */
    private username: String | undefined;
    private userFullName: String | undefined;
    private avatarUrl: String | undefined;
    private company: String | undefined;
    private blogURl: String | undefined;
    private createdAt: Date | undefined;
    private updatedAt: Date | undefined;
    private accountStats: AbstractStats | undefined;
    private publicRepos: Array<AbstractObjectModel> | undefined;

    /**
     * Constructor
     */
    constructor(){
        super();
    }

    /*
     *  Getters  
     */
    public getUsername(): String | undefined{
        return this.username;
    }

    public getUserFullName(): String | undefined{
        return this.userFullName;
    }

    public getAvatarURL(): String | undefined{
        return this.avatarUrl;
    }

    public getCompany(): String | undefined{
        return this.company;
    }

    public getBlogURL(): String | undefined{
        return this.blogURl;
    }

    public getDateCreated(): Date | undefined{
        return this.createdAt;
    }

    public getLastUpdated(): Date | undefined{
        return this.updatedAt;
    }

    public getAccountStats(): AbstractStats | undefined{
        return this.accountStats;
    }

    public getPublicRepos(): Array<AbstractObjectModel> | undefined{
        return this.publicRepos;
    }


    /* 
     * Setters 
     */
    public setUsername(username: String): Account{
        this.username = username;
        return this;
    }

    public setUserFullName(userFullName: String): Account{
        this.userFullName = userFullName;
        return this;
    }

    public setAvatarURL(url: String): Account{
        this.avatarUrl = url;
        return this;
    }

    public setCompany(name: String): Account{
        this.company = name;
        return this;
    }

    public setBlogURL(url: String): Account{
        this.blogURl = url;
        return this;
    }

    public setDateCreated(date: Date): Account{
        this.createdAt = date;
        return this;
    }

    public setLastUpdated(date: Date): Account{
        this.updatedAt = date;
        return this;
    }

    public setAccountStats(stats: AbstractStats): Account{
        this.accountStats = stats;
        return this;
    }

    public setPublicRepos(repos: Array<AbstractObjectModel>): Account{
        this.publicRepos = repos;
        return this;
    }

    /**
     * Returns trues this specific Objec has a builder Object 
     */
    public hasBuilder(): boolean {
        return true;
    }  
}

export default Account;