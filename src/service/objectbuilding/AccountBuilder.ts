/** 
 * This class is in charge of building an Account object 
 */

import IObjectModelBuilder from "../../abstraction/IObjectModelBuilder";
import AbstractAccountBuilder from "./AbstractAccountBuilder";

class AccountBuilder extends AbstractAccountBuilder{
    protected buildBasicInfo(): IObjectModelBuilder {
        throw new Error("Method not implemented.");
    }
    protected buildPublicRepos(): IObjectModelBuilder {
        throw new Error("Method not implemented.");
    }
    protected buildStats(): IObjectModelBuilder {
        throw new Error("Method not implemented.");
    }
}

export default AccountBuilder