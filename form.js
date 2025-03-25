class Form extends Container{
    #form;
    #nevField;
    #szamjegyekField;
    #szazadField;
    #manager;

    /**
     * 
     * @param {PeopleManager} manager 
     */
    constructor(manager){
        super();

        this.#manager = manager;
        this.createForm();
        this.Div.appendChild(this.#form);
        this.#form.method = 'post';

        const submit = document.createElement('button');
        submit.type = 'submit';
        submit.textContent = 'Hozzáadás';
        submit.onclick = (e) => this.submitFunc(e);
        this.#form.appendChild(submit);
    }

    /**
     * 
     * @param {SubmitEvent} e 
     */
    submitFunc(e){
        e.preventDefault();

        /**
         * @type {Person}
         */
        let person = {};

        person.nev = this.#nevField.value;
        person.szamjegyekSzama = this.#szamjegyekField.value;
        person.szazad = this.#szazadField.value;

        this.#manager.addPerson(person);

        this.#form.reset();
    }

    createForm(){
        this.#form = document.createElement('form');
        this.Div.appendChild(this.#form);

        const nev = this.createField('Név', 'nev');
        const szamjegyek = this.createField('Számjegyek', 'szamjegyek');
        const szazad = this.createField('Század', 'szazad');

        this.#nevField = nev.input;
        this.#szamjegyekField = szamjegyek.input;
        this.#szazadField = szazad.input;

        this.#form.appendChild(nev.fullDiv);
        this.#form.appendChild(szamjegyek.fullDiv);
        this.#form.appendChild(szazad.fullDiv);
    }

    /**
     * 
     * @param {String} name 
     * @param {String} id 
     * 
     * 
     * @returns {{fullDiv: HTMLDivElement, input: HTMLInputElement}} objet that has the div and the input
     */
    createField(name, id){
        const field = document.createElement('div');
        const error = document.createElement('p');
        const label = document.createElement('label');
        const input = document.createElement('input');

        input.id = label.for = id;
        label.textContent = name;
        input.type = 'text';


        field.appendChild(label);
        field.appendChild(document.createElement('br'));
        field.appendChild(input);
        field.appendChild(document.createElement('br'));

        return {fullDiv: field, input:input};
    }

    validate(){

    }
}

class FormField extends HTMLDivElement{
    #label;
    #input;
    #error;


    /**
     * 
     * @param {String} labelText 
     * @param {String} inputId 
     * @param {String} type 
     * @param {?{text:String, value:String}[]} options 
     */
    constructor(labelText, inputId, type, options){
        super();
        
        this.#label = document.createElement('label');
        this.#label.textContent = labelText;
        
        if(type === 'select'){
            this.#input = document.createElement('select');

            for(const option of options){
                const HTMLOption = document.createElement('option');
                HTMLOption.textContent = option.text;
                HTMLOption.value = option.value;

                this.#input.appendChild(HTMLOption);
            }
        }
        else{
            this.#input = document.createElement('input');
            this.#input.type = type;
            this.#label.for = this.#input.id = inputId;
        }
    
    }

    get Input(){
        return this.#input;
    }
}