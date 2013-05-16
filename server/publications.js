Meteor.publish('messages', function(limit) {
	return Messages.find({}, {sort: {submitted: -1}, limit: limit});
});

Meteor.publish('userPresence', function() {
	return Meteor.presences.find({ userId: { $exists: true}}); 
});

Meteor.publish('users', function() { 
return Meteor.users.find(); 
});

Meteor.users.deny({update: function () { return true; }})