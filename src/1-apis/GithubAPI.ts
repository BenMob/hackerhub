import AbstractAPI from "../2-abstraction/AbstractAPI";
import AbstractObjectModel from "../3-service/AbstractObjectModel";

class GitHubAPI extends AbstractAPI{
    protected post(endpoint: String | undefined, params: Object): String {
        throw new Error("Method not implemented.");
    }
    protected parseResponse(dataString: String): Object {
        throw new Error("Method not implemented.");
    }
    protected buildObjectModel(object: Object): AbstractObjectModel {
        throw new Error("Method not implemented.");
    }
}

export default GitHubAPI;