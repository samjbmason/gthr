Template.header.helpers({
	isLoading: function() {
    return Session.equals("locationCheck",undefined); 
  },
  locationCheck: function() {
    return Session.get("locationCheck");
  },
  geoEnabled: function() {
  	return Session.get("geoEnabled");
  }
});

Template.header.created = function() {
	navigator.geolocation.getCurrentPosition(success_callback,error_callback);
		
	function success_callback(p){
		Session.set("geoEnabled",true);
		// Building Latitude = 51.522206
		// Building Longitude = -0.078305
		var lat = parseFloat(p.coords.latitude);
		var lon = parseFloat(p.coords.longitude);
	  
	  if( lat >= 51.521606 && lat <= 51.522606 && lon >= -0.078805  && lon <=  -0.077705 ) {
	  	Session.set("locationCheck",true);
	  } else {
	  	Session.set("locationCheck",false);
	  }
	}

	function error_callback(p){
	  Session.set("geoEnabled",false);
	}
}