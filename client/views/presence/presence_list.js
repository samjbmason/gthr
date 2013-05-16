Template.presenceList.helpers({
	onlineUsers: function() {
		var users = _.map(Meteor.presences.find({userId: { $exists: true}}).fetch(), function(user) { 
    	return Meteor.users.findOne({_id :user.userId})
  	});
  	return users;
	},
	onlineCount: function() {
		return Meteor.presences.find({userId: { $exists: true}}).count();
	}
});