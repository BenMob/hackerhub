import AbstractAPI from "../abstraction/AbstractAPI";
import AbstractObjectModel from "../service/objectmodeling/AbstractObjectModel";

class GitHubAPI extends AbstractAPI{
    protected post(endpoint: String | undefined, params: Object): String {
        endpoint?.anchor; params.toString
        throw new Error("Method not implemented.");
    }
    protected parseResponse(dataString: String): Object {
        dataString.trim; 
        throw new Error("Method not implemented.");
    }
    protected buildObjectModel(object: Object): AbstractObjectModel {
        object.toString
        throw new Error("Method not implemented.");
    }
}

export default GitHubAPI;