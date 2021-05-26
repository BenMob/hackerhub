/**
 * This is the repository class
 */

import AbstractObjectModel from "./AbstractObjectModel";

class Repository extends AbstractObjectModel{
    private owner: String | undefined
    private name: String | undefined
    private description: String | undefined
    private url: String | undefined
    private websiteURL: String | undefined

    /*
     * Setters 
     */
    public setOwner(owner: String): Repository{
        this.owner = owner;
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

    /*
     * Getters  
     */
    public getOwner(): String | undefined{
        return this.owner;
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

    /**
     * Returns trues this specific Objec has a builder Object 
     */
    public hasBuilder(): boolean {
        return true;
    }
    
}

export default Repository