import IObjectModel from "./IObjectModel";

/**
 * The Interface for all the builder Objects
 */
interface IObjectModelBuilder{
    /**
     * defines the 
     * @param data JS Object data
     */
    from(data:Object): IObjectModelBuilder

    /**
     * Returns the built Object
     */
    buildObjectModel(): IObjectModel | undefined
}

export default IObjectModelBuilder;