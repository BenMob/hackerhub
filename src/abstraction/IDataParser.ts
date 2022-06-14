/**
 * Data parser interface
 */

interface IDataParser{
    /**
     * Takes a JSON String or an XML String and returns a JS object built from it
     * @param data JSON or XML string
     */
    parse(data: String): Object | null;
}

export default IDataParser 