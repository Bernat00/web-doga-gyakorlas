class Load{
    #manager;

    /**
     * 
     * @param {PeopleManager} manager 
     */
    constructor(manager){
        this.#manager = manager;
        this.cerateFileUpload();

        const button = document.createElement('button');
        button.textContent = 'letoltes';
        button.onclick = (e) => this.download();
        document.body.appendChild(button);
    }

    cerateFileUpload(){
        const input = document.createElement('input');
        input.type = 'file';
        input.onchange = (e) => this.uploadEvent(e);

        document.body.insertBefore(input, document.getElementById('div'));
    }

     /**
     * 
     * @param {Event} e 
     */
    uploadEvent(e){
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onload = () => {
            const lines = fileReader.result.split('\n');

            for (const line of lines){
                const tmp = line.split(';');
                this.#manager.addPerson({nev:tmp[0], szamjegyekSzama:tmp[1], szazad:[2]});
            }
        }

        fileReader.readAsText(file);
    }

    download(){
        const anchor = document.createElement('a');
        const tmp = this.#manager.createStringFromData();

        const blob = new Blob([tmp]);
        anchor.href = URL.createObjectURL(blob);

        anchor.download = 'data.csv';
        anchor.click();
        URL.revokeObjectURL(anchor.href);
    }
}
   