/**
 * This class is in charge of building a repository object
 */

import IObjectModelBuilder from "../../abstraction/IObjectModelBuilder";
import AbstractRepoBuilder from "./AbstractRepoBuilder";

class RepoBuilder extends AbstractRepoBuilder{
    protected buildBasicInfo(): IObjectModelBuilder {
        throw new Error("Method not implemented.");
    }
    protected buildLanguages(): IObjectModelBuilder {
        throw new Error("Method not implemented.");
    }
    protected buildStats(): IObjectModelBuilder {
        throw new Error("Method not implemented.");
    }
}

export default RepoBuilder;