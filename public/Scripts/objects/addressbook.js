(function(){
    class AddressBook {
        constructor() {
            // 300981989 Raghav Syal
            this.Contacts = [];
            var add = function(firstName,lastName,contactNumber,emailAddress){
                var contact ={
                    firstName:firstName,
                    lastName:lastName,
                    contactNumber:contactNumber,
                    emailAddress:emailAddress

                };
                contact[contact.length]=contact;
            };
        }

        // complete the addressbook class
    }

    objects.AddressBook = AddressBook;

})(objects || (objects = {}));