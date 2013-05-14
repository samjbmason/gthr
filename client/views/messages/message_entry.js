Template.messageEntry.events({
	'submit form': function(event) {
		event.preventDefault();

		var message = {
			content: $(event.target).find('[name=content]').val()
		}

		Meteor.call('postMessage',message,function(error,id) {
			if (error) {
      	throwError(error.reason);
      } else {
      	$(event.target).find('[name=content]').val("");
    	}
		}); 

	}
});