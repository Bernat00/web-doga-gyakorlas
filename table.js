/**
 * @typedef {{nev:String, szamjegyekSzama:Number, szazad:Number}} Person
 */

class Table extends Container{
    #tbody;

    /**
     * 
     * @param {PeopleManager} manager 
     */
    constructor(manager){
        super();

        const table = document.createElement('table');
        this.#tbody = document.createElement('tbody');
        
        table.appendChild(this.createHeader());
        table.appendChild(this.#tbody); 
        this.Div.appendChild(table);

        manager.OnUpdate = (people) => this.renderTable(people); 
        //hulye this 
    }

    OnUpdate(people){
        this.renderTable(people);
    }

    /**
     * 
     * @param {Person[]} people 
     */
    renderTable(people){
        this.#tbody.innerHTML = '';

        for (const person of people) {
            const row = this.createRow(person);
        }
    }
    
    /**
     * 
     * @param {String} text 
     * @param {String} type
     * @returns {HTMLTableCellElement}
     */
    createCell(text, type='td'){
        const td = document.createElement(type);
        td.textContent = text;
        return td;
    }

    /**
     * 
     * @param {Person} person

     */
    createRow(person){
        const tr = document.createElement('tr');

        tr.appendChild(this.createCell(person.nev));
        tr.appendChild(this.createCell(person.szamjegyekSzama));
        tr.appendChild(this.createCell(person.szazad));

        this.#tbody.appendChild(tr);
    }

    createHeader(){
        const thead = document.createElement('thead');
        const tr = document.createElement('tr');

        tr.appendChild(this.createCell('Név', 'th'));
        tr.appendChild(this.createCell('szamjegyek szama', 'th'));
        tr.appendChild(this.createCell('szaazad', 'th'));
        thead.appendChild(tr);

        return thead;
    }
}