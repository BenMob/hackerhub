import IDataParser from "../../abstraction/IDataParser";
import AbstractDataFormat from "./AbstractDataFormat"
import DataFormat from "./DataFormat";
import JSONData from "./JSONData";

/**
 * A DataParser class that parses JSON or XML String into JS Objects
 * By default it is set to parse JSON Files
 */
class DataParser implements IDataParser{
    /*
     * The Object used to parse
     */
    private dataParser: AbstractDataFormat = new JSONData();
    
    /**
     * Parses the data from JSON String to JS Object
     * @param data 
     */
    public parse(data: String){
        return this.dataParser.parse(data);
    }

    /**
     * Configures the formatter to the specified String type
     * @param format 
     */
    public configureParserTo(format:DataFormat){
        switch (format) {
            case DataFormat.JSON:
                this.dataParser = new JSONData();
                break;
        
            default:
                throw new Error("Invalid Parser Format!");
        }
    }
}

export default DataParser