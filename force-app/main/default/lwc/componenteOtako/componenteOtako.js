import { LightningElement } from 'lwc';

export default class ComponenteOtako extends LightningElement {

    baseURL = "https://ghibliapi.herokuapp.com/";
    filmsList = [];
    buttonHidden = false;

    connectedCallback(){
        this.filmNames();
    }

    filmNames(){
        this.buttonHidden = true;
        const calloutURL = this.baseURL + "films/";
        
        console.log(calloutURL);
        fetch(calloutURL)
            .then(response => response.json())
            .then(data => {this.filmsList = data})
           
    }
    
    showFilm(e){
        alert(e.target.name)
    }

    get filmsRecibed(){
        return this.filmsList.length > 0 ? true :  false
    }
}