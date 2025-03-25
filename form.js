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

        this.#nevField = document.createElement('input');
        this.#szamjegyekField = document.createElement('input');
        this.#szazadField = document.createElement('input');

        const label1 = document.createElement('label');
        const label2 = document.createElement('label');
        const label3 = document.createElement('label');

        this.#nevField.type = 'text';
        this.#nevField.id = label1.for = 'nev';
        this.#szamjegyekField.type = 'text';
        this.#szamjegyekField.id = label2.for = 'szamjegyek';
        this.#szazadField.type = 'text';
        this.#szazadField.id = label3.for = 'szazad';

        label1.textContent = 'Név:';
        label2.textContent = 'Számjegyek száma:';
        label3.textContent = 'Század';

        this.#form.appendChild(label1);
        this.#form.appendChild(document.createElement('br'));
        this.#form.appendChild(this.#nevField);
        this.#form.appendChild(document.createElement('br'));
        this.#form.appendChild(label2);
        this.#form.appendChild(document.createElement('br'));
        this.#form.appendChild(this.#szamjegyekField);
        this.#form.appendChild(document.createElement('br'));
        this.#form.appendChild(label3);
        this.#form.appendChild(document.createElement('br'));
        this.#form.appendChild(this.#szazadField);
    }

    /**
     * 
     * @param {String} name 
     * @param {String} id 
     */
    createField(name, id){
        // valamert megrtam 8000 code duplikacioval
    }
}