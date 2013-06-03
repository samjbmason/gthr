Template.messageEntry.events({
	'submit form': function(event) {
		event.preventDefault();

		function replaceWithLinks(text) {
    	var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    	return text.replace(exp,"<a target='_blank' href='$1'>$1</a>"); 
		}

		var rawMessage = $(event.target).find('[name=content]').val();
		var prettyMessage = replaceWithLinks(rawMessage);

		var message = {
			content: prettyMessage
		}

		Meteor.call('postMessage',message,function(error,id) {
			if (error) {
      	throwError(error.reason);
      } else {
      	$(event.target).find('[name=content]').val("").focus();
    	}
		}); 

	}

});

Template.messageEntry.rendered = function(){
	$('.entry-field').autosize({append: "\n"});
};   

