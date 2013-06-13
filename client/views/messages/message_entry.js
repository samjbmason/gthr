Template.messageEntry.events({
	'click input[type="submit"], keypress .entry-field': function(event) {
		if(event.type=="click"||event.which==13){
			event.preventDefault();

			function replaceWithLinks(text) {
	    	var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
	    	return text.replace(exp,"<a target='_blank' href='$1'>$1</a>"); 
			}

			var rawMessage = $('form').find('[name=content]').val();
			var prettyMessage = replaceWithLinks(rawMessage);

			var message = {
				content: prettyMessage
			}

			Meteor.call('postMessage',message,function(error,id) {
				if (error) {
	      	 return throwError(error.reason);
	      } else {
	      	$('form').find('[name=content]').val("").focus();
	      	var newMessage=Messages.findOne(id);
	      	var messageNotification = webkitNotifications.createNotification(
	      		'icon.png', 'New message from '+newMessage.name, newMessage.content);
	      	if(newMessage.userId!==Meteor.userId()){
						messageNotification.show();
					}

	    	}
			}); 
		}
	}
});

Template.messageEntry.rendered = function(){
	$('.entry-field').autosize({append: "\n"});
};   

