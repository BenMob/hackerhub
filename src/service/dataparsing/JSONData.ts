import AbstractDataFormat from "./AbstractDataFormat";

/**
 * Parses JSON String into JS Object
 */
class JSONData extends AbstractDataFormat{

    /**
     * Takes a String of data in JSON or XML and parses it into a JS Object
     * @param data 
     */
    public parse(data: String): Object {
        data.normalize
        throw new Error("Method not implemented.");
    }
}

export default JSONData
