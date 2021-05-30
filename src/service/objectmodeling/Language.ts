/**
 * The Language Object
 */

import AbstractObjectModel from "./AbstractObjectModel";

class Language extends AbstractObjectModel{

    /*
     * Attributes 
     */
    private name: String | undefined
    private lineCount: number | undefined

    constructor(name: String){
        super()
        this.name = name;
    }

    /**
     * Sets the line count 
     * @param count 
     */
    public setLineCount(count: number): void {
        this.lineCount = count;
    }

    /**
     * 
     * @returns Gets the name of the language
     */
    public getName(): String | undefined{
        return this.name;
    }

    /**
     * Returns the number of lines occuppied by the language
     */
    public getLineCount(): number | undefined{
        return this.lineCount;
    }

    /**
     * Returns true if this object has a builder 
     */
    public hasBuilder(): boolean {
        return false;
    }
}

export default Language;