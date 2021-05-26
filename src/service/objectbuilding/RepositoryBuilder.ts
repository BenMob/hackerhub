/**
 * This class is in charge of building a repository object
 */

import IObjectModelBuilder from "../../abstraction/IObjectModelBuilder";
import AbstractRepositoryBuilder from "./AbstractRepositoryBuilder";

class RepositoryBuilder extends AbstractRepositoryBuilder{
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

export default RepositoryBuilder