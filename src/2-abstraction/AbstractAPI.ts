import AbstractObjectModel from "../3-service/AbstractObjectModel"

/**
 * The Abstract API Class that all the other API classes inherit from
 */
abstract class AbstractAPI extends Object{
    private endPoints: Map<String, String> | undefined = undefined;

    /**
     * Pass in a map with all the API end points that this API has.
     * @param apiEndPoints 
     */
    public AbstractAPI(apiEndPoints: Map<String, String>):void{
        this.endPoints = apiEndPoints;
    }

    /**
     * returns all the map of all the endpoints for this API
     * @returns endPoints
     */
    public getEndPoints(): Map<String, String> | undefined {
        return this.endPoints;
    } 

    /**
     * Executes a post request
     * Parses the response
     * Builds an Object Model
     * @param param Object
     */
    public executePOST(endpointName: String, params:Object): AbstractObjectModel{
        let dataString: String = this.post(this.getEndPoints()?.get(endpointName), params);
        let dataObject: Object = this.parseResponse(dataString);
        let objectModel: AbstractObjectModel = this.buildObjectModel(dataObject);
        return objectModel;
    }

    /**
     * Sends a POST request to the designated API with the params Object
     * @param endPointName 
     * @param param
     * @returns a the repsonse string
     */
    protected abstract post(endpoint: String | undefined, params: Object): String;

    /**
     * Parses the response using the JSON Parser Object
     * @param data 
     * @returns the response Object
     */
    protected abstract parseResponse(dataString: String): Object;

    /**
     * Builds the Object the appriate builder Object
     * @param object 
     */
    protected abstract buildObjectModel(object: Object): AbstractObjectModel;
}

export default AbstractAPI