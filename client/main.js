messagesHandle= Meteor.subscribeWithPagination('messages',200);

Meteor.subscribe('users');

Meteor.startup(function () {
		Meteor.subscribe('userPresence'); 
}); 

// Global Helper for adding front-page class to body tag
Handlebars.registerHelper("isFrontPage", function() {
	if(Meteor.Router.page()=='frontPage') {
  	return 'front-page';
	}
});