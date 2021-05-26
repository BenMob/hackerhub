/**
 * This is an abtract class that is inherited from by all the stats Objects
 */

import AbstractObjectModel from "./AbstractObjectModel";

abstract class AbstractStats extends AbstractObjectModel{
    protected ownerId : String | undefined

    /**
     * 
     * @param id Sets the id of the owner of this Object
     */
    public setOwnerId(id: String): void{
        this.ownerId = id;
    }

    /**
     * Returns the id of the Owner Object
     * @returns ownerId
     */
    public getOwnerId(): String | undefined{
        return this.ownerId;
    }
}

export default AbstractStats