/**
 * @callback UpdateCallback
 * @param {Person[]} people
 */

class PeopleManager{
    /**
     * @type {Person[]}
     */
    #people;

    /**
     * @type {UpdateCallback}
     */
    #updateCallBack;


    constructor(){
        this.#people = [];
        this.#updateCallBack = () =>{
            console.log('updateCallback not set');
        };
    };

    /**
     * @param {UpdateCallback} callback
     */
    set UpdateCallback(callback){
        this.#updateCallBack = callback;
    }


    /**
     * 
     * @param {Person} peson 
     */
    addPerson(peson){
        this.#people.push(peson);
        this.#updateCallBack(this.#people);
    }
}