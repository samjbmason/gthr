Template.header.helpers({
  locationCheck: function() {
    return Session.get("locationCheck");
  }
});

Template.header.created = function() {
	navigator.geolocation.getCurrentPosition(success_callback,error_callback);
		
	function success_callback(p){
		// Building Latitude = 51.522206
		// Building Longitude = -0.078305
		var lat = parseFloat(p.coords.latitude);
		var lon = parseFloat(p.coords.longitude);
	  
	  if( lat >= 51.521606 && lat <= 51.522606 && lon >= -0.078805  && lon <=  -0.077705 ) {
	  	Session.set("locationCheck",1);
	  } else {
	  	Session.set("locationCheck",0);
	  }
	}

	function error_callback(p){
	     Session.set("locationCheck",0);
	}
}