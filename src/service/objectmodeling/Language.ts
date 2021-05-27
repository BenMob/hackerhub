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
    private color: String | undefined

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
     * Sets the color used to represent this language on the User Interface
     * @param color 
     */
    public setColor(color: String): void {
        this.color = color;
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
     * Returns the color of that represents this language 
     * @returns color
     */
    public getColor(): String | undefined{
        return this.color;
    }

    /**
     * Returns true if this object has a builder 
     */
    public hasBuilder(): boolean {
        return false;
    }
}

export default Language;