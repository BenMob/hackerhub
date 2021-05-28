/**
 * This is the Repo class
 */

import AbstractObjectModel from "./AbstractObjectModel";
import AbstractStats from "./AbstractStats";

class Repo extends AbstractObjectModel{
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

    public setCreationDate(date: Date): Repo{
        this.createdAt = date;
        return this;
    }

    public setUpdatedDate(date: Date): Repo{
        this.updatedAt = date;
        return this;
    }

    public setPushedDate(date: Date): Repo{
        this.pushedAt = date;
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
     * Returns trues this specific Object has a builder Object 
     */
    public hasBuilder(): boolean {
        return true;
    }
    
}

export default Repo