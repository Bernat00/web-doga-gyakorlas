/**
 * @callback OnSubmit
 * @param {SubmitEvent} e event
 */

class Form extends Container{
    /**
     * @type {HTMLFormElement}
     */
    #form;

    /**
     * @type {PeopleManager}
     */
    #manager;

    /**
     * @type {FormField[]}
     */
    #formFields;


    constructor(){
        super();

        this.#formFields = [];

        this.#form = document.createElement('form');        
        
        const submit = document.createElement('button');
        submit.type = 'submit';
        submit.textContent = 'Hozzáadás';
        
        this.#form.appendChild(submit);
        this.Div.appendChild(this.#form);
    }


    /**
     * @param {OnSubmit} callback 
     */
    set OnSubmit(callback){
        this.#form.addEventListener('submit',callback);
    }

    /**
     * @returns {FormField}
     */
    get FormFields(){
        return this.formFields;
    }

    reset(){
        this.#form.reset();
    }


    /**
     * 
     * @param {FormField[]} formFields 
     */
    addFormFields(formFields){
        for(const formField of formFields){
            this.#formFields.push(formField);
        }
    }


    /**
     * @returns {Boolean}
     */
    validate(){
        let isValid = true;

        for(const formField of this.#formFields){
            if(!formField.Value){
                formField.ErrorText = 'kötelezo mezo';
                isValid = false;
            }
            else{
                formField.ErrorText = '';
            }
        }

        return isValid;
    }
}

class FormField extends HTMLDivElement{ // velemenyem szerint az h ilyet nem lehet csinalni az kaka
    // ha ezt be akarom fejezni akk kell csinalni egy div propertit es abba kell rakni a dolgokat
    // mennyen a fenebe az aki ezt kitalalta 
    // meg az a kerdesem h ha vannak classok akk miert egy rohadt oject a div amin van valami specko interface
    // vagy ha nem igy van akk nem ertem
    //áááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááá
    #label;
    #input;

    /**
     * @type {HTMLParagraphElement}
     */
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
        this.#error = document.createElement('p');
        this.#error.style.color = 'red';
        
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


        this.appendChild(this.#label);
        this.appendChild(this.#input);
        this.appendChild(this.#error);
    }


    /**
     * @returns {String}
     */
    get Value(){
        return this.#input.value;
    }

    /**
     * @param {String} text 
     */
    set ErrorText(text){
        this.#error.textContent = text
    }
}