/**
 * @callback OnUpdate
 * @param {Person[]} people
 */

class PeopleManager{
    /**
     * @type {Person[]}
     */
    #people;

    /**
     * @type {OnUpdate}
     */
    #onUpdate;


    constructor(){
        this.#people = [];
        this.#onUpdate = () =>{
            console.log('OnUpdate not set');
        };
    };

    /**
     * @param {OnUpdate} callback
     */
    set OnUpdate(callback){
        this.#onUpdate = callback;
    }


    /**
     * 
     * @param {Person} peson 
     */
    addPerson(peson){
        this.#people.push(peson);
        this.#onUpdate(this.#people);
    }


    createStringFromData(){
        let strings = [];


        for(const person of this.#people){
            strings.push(person.nev + ';' + person.szamjegyekSzama + ';' + person.szazad)
        }

        return strings.join('\n');
    }
}