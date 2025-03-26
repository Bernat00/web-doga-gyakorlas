const container = new Container();
const manager = new PeopleManager();
const table = new Table(manager);
const form = new Form();
form.addFormFields(
    [
        new FormField('Név', 'nev', 'text'),
        new FormField('Szamjegyek szama', 'szamjegyekszama', 'text'),
        new FormField('Szazad', 'szazad', 'text')
    ]
);


/**
 * 
 * @param {SubmitEvent} e 
 * mI A tOKomErT nem mondja meg az intelisense h az e az egy SubmitEvent 
 * (csak miutan ide is irtam)
 */
form.OnSubmit = (e) => { 
    e.preventDefault();

    if(form.validate()){
        /**
         * @type {Person}
         */
        const person = {};
        person.nev = form.FormFields[0];
        person.szamjegyekSzama = form.FormFields[1];
        person.szazad = form.FormFields[2];   
        
        manager.addPerson(person);

        form.reset()
    }
} 


const load = new Load(manager);


