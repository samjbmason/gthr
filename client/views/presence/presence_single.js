Template.presenceSingle.helpers({
	isOnline: function() {
  	return Meteor.presences.findOne({userId: this._id});
  },
  isYou: function() {
  	if(Meteor.userId()===this._id) {
  		return true;
  	} else {
  		return false;
  	}
  },
  avatar: function() {
  	user= Meteor.users.findOne(this._id);
  	email= user.emails[0].address;
  	emailHash = CryptoJS.MD5(email);
  	avatarUrl= 'http://www.gravatar.com/avatar/'+emailHash+'?s=40&d=mm';
  	return avatarUrl;
  }
});