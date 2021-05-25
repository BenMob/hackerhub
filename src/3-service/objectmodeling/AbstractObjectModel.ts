import IObjectModel from "../../2-abstraction/IObjectModel";
import {v4 as uuid } from "uuid"

/**
 * This class is the Abstract class that all the Object Models will inherit from.
 */
abstract class AbstractObjectModel extends Object implements IObjectModel{
    private id: String | undefined = undefined;

    public AbstractObjectModel(){
        this.id = uuid();
    }

    /**
     * Sets the id of the object
     * @param id 
     */
    public setId(id: String) : void{
        this.id = id;
    }

    /**
     * Gets the id of the Object
     * @returns 
     */
    public getId(): String | undefined{
        return this.id;
    }

    /**
     * Returns true if this Object has 
     */
    public hasId(): boolean{
        return (this.id == undefined);
    }

    /**
     * Returns trues this specific Objec has a builder Object 
     */
    public abstract hasBuilder(): boolean;
}

export default AbstractObjectModel;