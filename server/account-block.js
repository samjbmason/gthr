/*--------- 
Not perfect, but for the time being I will be using manual methods to block account creation until they allow new fields to be added to signup box and I can create a security question


//Accounts.config({forbidClientAccountCreation: true});
Accounts.validateNewUser(function(user) {
   if (Meteor.users.find().count() === 0)
       return true;
   throw new Meteor.Error(404, "NO new users allowed... sorry peeps!");
});
---------*/