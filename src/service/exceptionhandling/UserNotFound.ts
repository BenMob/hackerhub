/**
 * Creates this Object when a user is not found
 */

import IError from "../../abstraction/IError";

class UserNotFound implements IError{
    private message : string | undefined;

    constructor(message: string){
        this.message = message;
    }
    
    public getMessage(): string | undefined{
        return this.message;
    }
}

export default UserNotFound;