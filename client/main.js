messagesHandle= Meteor.subscribeWithPagination('messages',200);

Meteor.subscribe('users');

Meteor.startup(function () {
		Meteor.subscribe('userPresence'); 
}); 