Template.presenceList.helpers({
  onlineCount: function() {
  	return Meteor.presences.find({ userId: { $exists: true}}).count();
  },
  allUsers: function() {
  	return Meteor.users.find();
  },
  isOnline: function() {
  	return Meteor.presences.findOne({userId: this._id});
  }
});