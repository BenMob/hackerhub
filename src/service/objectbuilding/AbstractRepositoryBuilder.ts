/**
 * Account Object Builder
 */

import IObjectModel from "../../abstraction/IObjectModel";
import IObjectModelBuilder from "../../abstraction/IObjectModelBuilder";

abstract class AbstractRepositoryBuilder implements IObjectModelBuilder{
    
    /*
     * The data to build the Object from 
     */
    protected data: Object | undefined;

    /*
     * The built Object after all the methids involved in the building process have 
     * been called. 
     */
    private objectModel: IObjectModel | undefined = undefined; 

    /**
     * Defines the data from which the Object gets built
     * @param data JS Object data
     */
    public from(data: Object): IObjectModelBuilder {
        this.data = data;
        return this
    }

    /**
     * Returns the built Object
     */
    public buildObjectModel(): IObjectModel | undefined {
        return this.objectModel;
    }

    /**
     * Initialized the Object's basic primitive attributes
     */
    protected abstract buildBasicInfo(): IObjectModelBuilder

    /**
     * Builds the array of Languages used for this repository
     */
    protected abstract buildLanguages(): IObjectModelBuilder

    /**
     * Builds the Account Stats object
     */
    protected abstract buildStats(): IObjectModelBuilder
}

export default AbstractRepositoryBuilder