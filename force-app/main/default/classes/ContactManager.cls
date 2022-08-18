public with sharing class ContactManager {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(String accId){

        List<Contact> conList = new List<Contact>();

        try {
            conList =[SELECT Id, FirstName, LastName FROM Contact WHERE AccountId = :accId];
            //conList = [SELECT Id, FirstName, LastName FROM Contact WHERE AccountId = :accId];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

        return conList;
    }
}
 