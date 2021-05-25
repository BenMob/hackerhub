/**
 * This class is the Abstract class that all the Object Models will inherit from.
 */
abstract class AbstractObjectModel extends Object{
    private id: number | undefined = undefined;

    public AbstractObjectModel(){}

    /**
     * Sets the id of the object
     * @param id 
     */
    public setId(id: number) : void{
        this.id = id;
    }

    /**
     * Gets the id of the Object
     * @returns 
     */
    public getId(): number | undefined{
        return this.id;
    }

    /**
     * Returns trues this specific Objec has a builder Object 
     */
    public abstract hasBuilder(): boolean;
}

export default AbstractObjectModel;