/**
 * Account Object Builder
 */

import IObjectModel from "../../abstraction/IObjectModel";
import IObjectModelBuilder from "../../abstraction/IObjectModelBuilder";
import Account from "../objectmodeling/Account";

abstract class AbstractAccountBuilder implements IObjectModelBuilder{
    
    /*
     * The data to build the Object from 
     */
    protected data: any;

    /*
     * The built Object after all the methids involved in the building process have 
     * been called. 
     */
    protected objectModel: Account = new Account(); 

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
        this.buildBasicInfo().buildPublicRepos().buildStats();
        return this.objectModel;
    }

    /**
     * Initialized the Object's basic primitive attributes
     */
    protected abstract buildBasicInfo(): AbstractAccountBuilder

    /**
     * Builds the array of public repositories in thes account
     */
    protected abstract buildPublicRepos(): AbstractAccountBuilder

    /**
     * Builds the Account Stats object
     */
    protected abstract buildStats(): AbstractAccountBuilder
}

export default AbstractAccountBuilder