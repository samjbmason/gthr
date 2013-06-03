Template.messagesList.helpers({
	messages: function() {
		return Messages.find({}, {sort: {submitted: -1},limit: messagesHandle.limit()});
	},
	messagesReady: function() {
		return ! messagesHandle.loading();
	},
	allMessagesLoaded: function() {
		return ! messagesHandle.loading() &&
			Messages.find().count() < messagesHandle.loaded();
	}
});

Template.messagesList.events({
	'click .load-more': function(event) {
    event.preventDefault();
    messagesHandle.loadNextPage();
  }
});