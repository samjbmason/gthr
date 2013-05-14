Template.messageEntry.events({
	'submit form': function(event) {
		event.preventDefault();

		var message = {
			content: $(event.target).find('[name=content]').val()
		}

		message._id = Messages.insert(message);
		Meteor.Router.to('messagesList');
	}
});