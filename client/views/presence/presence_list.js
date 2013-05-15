Deps.autorun(function() {
  console.log("There are " + Meteor.presences.find().count() + " users online");
});

Template.presenceList.helpers({
	onlineUsers: function() {
		return Meteor.presences.find();
	},
	onlineCount: function() {
		return Meteor.presences.find().count();
	}
});