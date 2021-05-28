/**
 * This is the repository class
 */

import AbstractObjectModel from "./AbstractObjectModel";
import AbstractStats from "./AbstractStats";

class Repository extends AbstractObjectModel{
    private owner: String | undefined;
    private ownerAvatarURL: String | undefined;
    private name: String | undefined;
    private description: String | undefined;
    private url: String | undefined;
    private websiteURL: String | undefined;
    private createdAt: Date | undefined
    private pushedAt: Date | undefined
    private updatedAt: Date | undefined
    private languages: Array<AbstractObjectModel> | undefined;
    private repoStats: AbstractStats | undefined;

    /*
     * Setters 
     */
    public setOwner(owner: String): Repository{
        this.owner = owner;
        return this;
    }

    public setOwnerAvatarURL(avatarUrl: String): Repository{
        this.ownerAvatarURL = avatarUrl;
        return this;
    }

    public setName(name : String): Repository{
        this.name = name;
        return this;
    }

    public setDescription(description: String): Repository{
        this.description = description;
        return this;
    }

    public setURL(url: String): Repository{
        this.url = url;
        return this;
    }

    public setWebSiteURL(url: String): Repository{
        this.websiteURL = url;
        return this;
    }

    public setCreationDate(date: Date): Repository{
        this.createdAt = date;
        return this;
    }

    public setUpdatedDate(date: Date): Repository{
        this.updatedAt = date;
        return this;
    }

    public setPushedDate(date: Date): Repository{
        this.pushedAt = date;
        return this;
    }

    public setLanguages(languages: Array<AbstractObjectModel>): Repository{
        this.languages = languages;
        return this;
    }

    public setRepoStats(stats: AbstractStats): Repository{
        this.repoStats = stats;
        return this;
    }

    /*
     * Getters  
     */
    public getOwner(): String | undefined{
        return this.owner;
    }

    public getOwnerAvatarURL(): String | undefined{
        return this.ownerAvatarURL;
    }

    public getName(): String | undefined{
        return this.name;
    }

    public getDescription(): String | undefined{
        return this.description;
    }

    public getUrl(): String | undefined{
        return this.url;
    }

    public getWebsiteUrl(): String | undefined{
        return this.websiteURL
    }

    public getCreationDate(): Date | undefined{
        return this.createdAt;
    }

    public getUpdatedDate(): Date | undefined{
        return this.updatedAt;
    }

    public getPushedDate(): Date | undefined{
        return this.pushedAt;
    }

    public getLanguages(): Array<AbstractObjectModel> | undefined{
        return this.languages;
    }

    public getRepoStats(): AbstractStats | undefined{
        return this.repoStats;
    }

    /**
     * Returns trues this specific Objec has a builder Object 
     */
    public hasBuilder(): boolean {
        return true;
    }
    
}

export default Repository