/**
 * @callback OnSubmit
 * @param {SubmitEvent} e event
 */

class Form extends Container{
    /**
     * @type {HTMLFormElement}
     */
    #form;

    #button;

    /**
     * @type {PeopleManager}
     */
    #manager;

    /**
     * @type {FormField[]}
     */
    #formFields;


    constructor(submitBTNText){
        super();

        this.#formFields = [];

        this.#form = document.createElement('form');        
        
        this.#button = document.createElement('button');
        this.#button.type = 'submit';
        this.#button.textContent = submitBTNText;
        
        this.#form.appendChild(this.#button);
        this.Div.appendChild(this.#form);
    }


    /**
     * @param {OnSubmit} callback 
     */
    set OnSubmit(callback){
        this.#form.addEventListener('submit',callback);
    }

    /**
     * @returns {FormField[]}
     */
    get FormFields(){
        return this.#formFields;
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
            this.#form.insertBefore(formField.Div, this.#button);
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

class FormField{
    #label;
    #input;

    /**
     * @type {HTMLDivElement}
     */
    #div;

    /**
     * @type {HTMLParagraphElement}
    */
   #error;
   
    
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

    /**
     * @returns {HTMLDivElement}
     */
    get Div(){
        return this.#div;
    }
    
    
        /**
         * 
         * @param {String} labelText 
         * @param {String} inputId 
         * @param {String} type 
         * @param {?{text:String, value:String}[]} options 
         */
        constructor(labelText, inputId, type, options){
            this.#div = document.createElement('div');
    
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
    
            
            this.#div.appendChild(this.#label);
            this.#div.appendChild(document.createElement('br'));
            this.#div.appendChild(this.#input);
            this.#div.appendChild(document.createElement('br'));
            this.#div.appendChild(this.#error);
        }
}