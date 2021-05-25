import IObjectModel from "./IObjectModel";

/**
 * The Interface for all the builder Objects
 */
interface IObjectModelBuider{
    /**
     * defines the 
     * @param data JS Object data
     */
    from(data:Object): this
    getResult(): IObjectModel
}

export default IObjectModelBuider;