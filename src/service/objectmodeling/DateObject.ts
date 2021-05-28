/**
 * The Date class used to represent Dates and Time in this system
 * 
 * Credit to Evgenii Koriakin for the ISO based date-time-js library being used by this class
 * to manage date and time: https://github.com/eakoriakin/date-time-js
 */

import AbstractObjectModel from "./AbstractObjectModel";
import { DateTime } from "date-time-js"

class DateObject extends AbstractObjectModel{

    /*
     * The DateTime Object 
     */
    private dateTime: DateTime | undefined;

    /**
     * Overloaded constructor with an optional dataString
     * @param dateString 
     */
    constructor(dateString?: string){
        super();
        this.dateTime = dateString && new DateTime(dateString) || new DateTime();
    }

    public getYear(): number {
        return this.dateTime!.year();
    }

    public getMonth(): number{
        return this.dateTime!.month() + 1;
    }

    public getDay(): number{
        return this.dateTime!.date();
    }

    public getHours(): number{
        return this.dateTime!.hour();
    }

    public getMinutes(): number{
        return this.dateTime!.minute();
    }

    public getSeconds(): number{
        return this.dateTime!.second();
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