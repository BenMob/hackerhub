/**
 * This is the Repo class
 */

import AbstractObjectModel from "./AbstractObjectModel";
import AbstractStats from "./AbstractStats";
import DateObject from "./DateObject";
import Language from "./Language";
import RepoStats from "./RepoStats";

class Repo extends AbstractObjectModel{
    private owner: String | null = null;
    private ownerAvatarURL: String | null = null;
    private name: String | null = null;
    private description: String | null = null;
    private url: String | null = null;
    private websiteURL: String | null = null;
    private createdAt: AbstractObjectModel | null = null;
    private pushedAt: AbstractObjectModel | null = null;
    private updatedAt: AbstractObjectModel | null = null;
    private languages: Array<AbstractObjectModel> = [];
    private repoStats: AbstractStats | null = null;

    /*
     * Setters 
     */
    public setOwner(owner: String): Repo{
        this.owner = owner;
        return this;
    }

    public setOwnerAvatarURL(avatarUrl: String): Repo{
        this.ownerAvatarURL = avatarUrl;
        return this;
    }

    public setName(name : String): Repo{
        this.name = name;
        return this;
    }

    public setDescription(description: String): Repo{
        this.description = description;
        return this;
    }

    public setURL(url: String): Repo{
        this.url = url;
        return this;
    }

    public setWebsiteURL(url: String): Repo{
        this.websiteURL = url;
        return this;
    }

    public setCreationDate(date: string | DateObject): Repo{
        this.createdAt = (typeof date == "string")? new DateObject(date): date;
        return this;
    }

    public setLastUpdateDate(date: string | DateObject): Repo{
        this.updatedAt = (typeof date == "string")? new DateObject(date): date;
        return this;
    }

    public setPushDate(date: string | DateObject): Repo{
        this.pushedAt = (typeof date == "string")? new DateObject(date): date;
        return this;
    }

    public setLanguages(languages: Array<AbstractObjectModel>): Repo{
        this.languages = languages;

        return this;
    }

    public setRepoStats(stats: AbstractStats): Repo{
        this.repoStats = stats;
        return this;
    }

    /*
     * Getters  
     */
    public getOwner(): String | null{
        return this.owner;
    }

    public getOwnerAvatarURL(): String | null{
        return this.ownerAvatarURL;
    }

    public getName(): String | null{
        return this.name;
    }

    public getDescription(): String | null{
        return this.description;
    }

    public getUrl(): String | null{
        return this.url;
    }

    public getWebsiteUrl(): String | null{
        return this.websiteURL
    }

    public getCreationDate(): DateObject | null{
        return this.createdAt as DateObject;
    }

    public getLastUpdateDate(): DateObject | null{
        return this.updatedAt as DateObject;
    }

    public getPushDate(): DateObject | null{
        return this.pushedAt as DateObject;
    }

    public getLanguages(): Array<Language> {
        return this.languages as Array<Language>;
    }

    public getRepoStats(): RepoStats | null{
        return this.repoStats as RepoStats;
    }

    /**
     * Returns trues this specific Object has a builder Object 
     */
    public hasBuilder(): boolean {
        return true;
    }
    
}

export default Repo