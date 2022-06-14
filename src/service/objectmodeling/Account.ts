/**
 * This is the account class
 */

import AbstractObjectModel from "./AbstractObjectModel";
import AbstractStats from "./AbstractStats";
import DateObject from "./DateObject";

class Account extends AbstractObjectModel{

    /*
     * Attributes
     */
    private username: String | null = null;
    private userFullName: String | null = null;
    private avatarUrl: String | null = null;
    private company: String | null = null;
    private blogURl: String | null = null;
    private createdAt: AbstractObjectModel | null = null;
    private updatedAt: AbstractObjectModel | null = null;
    private accountStats: AbstractStats | null = null;
    private publicRepos: Array<AbstractObjectModel> | null = null;

    /**
     * Constructor
     */
    constructor(){
        super();
    }

    /*
     *  Getters  
     */
    public getUsername(): String | null{
        return this.username;
    }

    public getUserFullName(): String | null{
        return this.userFullName;
    }

    public getAvatarURL(): String | null{
        return this.avatarUrl;
    }

    public getCompany(): String | null{
        return this.company;
    }

    public getBlogURL(): String | null{
        return this.blogURl;
    }

    public getCreationDate(): DateObject | null{
        return this.createdAt as DateObject;
    }

    public getLastUpdateDate(): DateObject | null{
        return this.updatedAt as DateObject;
    }

    public getAccountStats(): AbstractStats | null{
        return this.accountStats;
    }

    public getPublicRepos(): Array<AbstractObjectModel> | null{
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

    public setCreationDate(date: string | DateObject): Account{
        this.createdAt = (typeof date == "string")? new DateObject(date): date;
        return this;
    }

    public setLastUpdateDate(date: string | DateObject): Account{
        this.updatedAt = (typeof date == "string")? new DateObject(date): date;
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