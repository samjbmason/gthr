//Accounts.config({forbidClientAccountCreation: true});
Accounts.validateNewUser(function(user) {
   if (Meteor.users.find().count() === 0)
       return true;
   throw new Meteor.Error(404, "NO new users allowed... sorry peeps!");
});