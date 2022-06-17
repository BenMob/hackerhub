
import IDataParser from "../../abstraction/IDataParser";

/**
 * Parses JSON String into JS Object
 */
class JSONParser implements IDataParser{

    /**
     * Takes a String of data in JSON and parses it into a JS Object
     * @param data 
     */
    public parse(data: string): Object{
        return JSON.parse(data);
    }
}

export default JSONParser
