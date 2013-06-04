Template.presenceSingle.helpers({
	isOnline: function() {
  	return Meteor.presences.findOne({userId: this._id});
  }
});