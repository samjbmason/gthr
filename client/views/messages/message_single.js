Template.messageSingle.helpers({
	niceSubmitted: function() {
		var rawDate= moment(this.submitted);
		var niceDate = rawDate.format("h:mma DD/MM/YY");
		return niceDate;
	},
	ownsPostClass: function() {
		if(this.userId==Meteor.userId()) {
			return "owns-post";
		}
	}
});

Template.messageSingle.rendered = function() {
	var instance = this;
	var $this = $(this.firstNode);

	if (typeof(instance.currentPosition) !== 'undefined') {
		$this.addClass("oldPost");
	} else {
		$this.addClass("invisible");
	}

	Meteor.defer(function() {
		instance.currentPosition = 1;
    $this.removeClass("invisible");
  }); 
};