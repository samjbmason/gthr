Meteor.publish('messages', function(limit) {
	return Messages.find({}, {sort: {submitted: -1}, limit: limit});
});

Meteor.publish('userPresence', function() {
	return Meteor.presences.find({}, {fields: {state: true, userId: true}});
});