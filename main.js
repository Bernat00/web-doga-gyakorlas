const container = new Container();
const manager = new PeopleManager();
const table = new Table(manager);
const form = new Form('Hozzáadás');
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
        person.nev = form.FormFields[0].Value;
        person.szamjegyekSzama = form.FormFields[1].Value;
        person.szazad = form.FormFields[2].Value;   
        
        manager.addPerson(person);

        form.reset();
    }
} 


const form2 = new Form('keresés');
form2.addFormFields([
    new FormField('kereses', 'search', 'text'),
    new FormField('mire', 'mire', 'select',
        [
            {text:'', value:''},
            {text:'név', value:'nev'},
            {text:'szamjegyekszama', value:'szamjegyekszama'},
            {text:'szazad', value:'szazad'}
        ])
]);

form2.OnSubmit = (e) =>{
    e.preventDefault();

    if(form2.FormFields[1].Value && form2.FormFields[0].Value){
        manager.filter(form2.FormFields[0].Value, form2.FormFields[1].Value);
    }
    else{
        manager.runOnUpdate();
    }
};

const load = new Load(manager);


