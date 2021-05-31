/**
 * Account Object Builder
 */

import IObjectModel from "../../abstraction/IObjectModel";
import IObjectModelBuilder from "../../abstraction/IObjectModelBuilder";
import Repo from "../objectmodeling/Repo";

abstract class AbstractRepoBuilder implements IObjectModelBuilder{
    
    /*
     * The data to build the Object from 
     */
    protected data: any | undefined;

    /*
     * The built Object after all the methids involved in the building process have 
     * been called. 
     */
    protected objectModel: Repo | undefined = undefined; 

    /**
     * Defines the data from which the Object gets built
     * @param data JS Object data
     */
    public from(data: any): IObjectModelBuilder {
        this.data = data;
        this.objectModel = new Repo();
        return this
    }

    /**
     * Returns the built Object
     */
    public buildObjectModel(): IObjectModel | undefined {
        this.buildBasicInfo().buildCreationDate().buildPushDate().buildUpdateDate().buildLanguages().buildStats();
        return this.objectModel;
    }

    /**
     * Initialized the Object's basic primitive attributes
     */
    protected abstract buildBasicInfo(): AbstractRepoBuilder

    /**
     * Build the creation date DateObject
     */
    protected abstract buildCreationDate(): AbstractRepoBuilder

    /**
     * Builds the  up pushed date Object
     */
    protected abstract buildPushDate(): AbstractRepoBuilder

    /**
     * Builds the update date Object
     */
    protected abstract buildUpdateDate(): AbstractRepoBuilder 

    /**
     * Builds the array of Languages used for this repository
     */
    protected abstract buildLanguages(): AbstractRepoBuilder

    /**
     * Builds the Account Stats object
     */
    protected abstract buildStats(): AbstractRepoBuilder
}

export default AbstractRepoBuilder;