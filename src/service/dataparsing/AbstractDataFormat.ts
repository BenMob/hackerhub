/**
 * The Absract class that the data format classes inherit from
 */
abstract class AbstractDataFormat{

    /**
     * Takes a String of data in JSON or XML and parses it into a JS Object
     * @param data 
     */
    public abstract parse(data: String): Object
}

export default AbstractDataFormat