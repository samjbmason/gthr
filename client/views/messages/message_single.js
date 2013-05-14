Template.messageSingle.helpers({
	niceSubmitted: function() {
		var rawDate= moment(this.submitted);
		var niceDate = rawDate.format("H:mm DD/MM/YY");
		return niceDate;
	}
});