/**
 * Data parser interface
 */

import DataFormat from "../3-service/dataparsing/DataFormat";

interface IDataParser{
    /**
     * Takes a JSON String or an XML String and returns a JS object built from it
     * @param data JSON or XML string
     */
    parse(data: String): Object

    /**
     * Defines the format of the string that was passed in 
     * It can either be enums DataFormat.JSON or DataFormat.XML
     * @param format 
     */
    setDataFormat(format: DataFormat): void
}

export default IDataParser 