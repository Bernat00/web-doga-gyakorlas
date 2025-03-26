class Container{
    constructor(){
        
    };
    
    get Div(){
        let div = document.getElementById('div')

        if(!div){
            div = document.createElement('div');
            div.id = 'div';
            document.body.appendChild(div);
        }

        return div;
    };


}