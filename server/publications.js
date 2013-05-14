Meteor.publish('messages', function(limit) {
	return Messages.find({}, {sort: {submitted: -1}, limit: limit});
});