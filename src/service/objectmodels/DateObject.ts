/**
 * The Date class used to represent Dates and Time in this system
 * 
 * Credit to Evgenii Koriakin for the ISO based date-time-js library being used by this class
 * to manage date and time: https://github.com/eakoriakin/date-time-js
 */

import AbstractObjectModel from "./AbstractObjectModel";

class DateObject extends AbstractObjectModel{

    /*
     * The DateTime Object 
     */
    private dateTime: Date | undefined;

    /**
     * Overloaded constructor with an optional dataString
     * @param dateString 
     */
    constructor(dateString?: string){
        super();
        this.dateTime = dateString && new Date(dateString) || new Date();
    }

    public getYear(): number {
        return this.dateTime!.getUTCFullYear();
    }

    public getMonth(): number{
        return this.dateTime!.getUTCMonth() + 1;
    }

    public getDay(): number{
        return this.dateTime!.getUTCDate();
    }

    public getHours(): number{
        return this.dateTime!.getUTCHours();
    }

    public getMinutes(): number{
        return this.dateTime!.getUTCMinutes();
    }

    public getSeconds(): number{
        return this.dateTime!.getUTCSeconds();
    }

    /**
     * Checks if this Object has a Builder in Object
     * @returns false
     */
    public hasBuilder(): boolean {
        return false;
    }
    
}

export default DateObject;