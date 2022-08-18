import { LightningElement, wire} from 'lwc';
import getAllAcc from '@salesforce/apex/AccountManager.getAccounts';
import getContacts from '@salesforce/apex/ContactManager.getContacts';

export default class TestComponent extends LightningElement {
    @wire(getAllAcc)
    accounts;
    
    get responseRecibed(){
        return this.accounts.data ? true : false;
    }

    contacts;
    selectedAccId;
    arrayTest = [];
    
    showTileValue(event){
        console.log(event.target.value);
    }
    
    async showContacts(event){
        
        console.log(event.target.value);
        //{ payload: JSON.stringify(noteItem)};
        //calling
        const response = await getContacts({accId: event.target.value});
    
        this.arrayTest = response.map((obj)=>{
            return { value: obj.Id, label: `${obj.FirstName} ${obj.LastName}`, description: `Descripcion ${obj.Id}` };
        });
    }
    
    showSomething(event){
        
    }

    get responseRecibedCont(){  
        return this.arrayTest.length > 0 ? true : false;
    }

     
} 