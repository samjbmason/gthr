Template.header.helpers({
  locationCheck: function() {
    return Session.get("locationCheck");
  },
  isLoading: function() {
    return Session.equals("locationCheck",undefined); 
  },
  isGeoAllowed: function() {
  	return Session.get("geoPermissions");
  },
  geoDenied: function() {
  	return Session.get("geoDenied");
  }
});

Template.header.created = function() {
	Session.setDeafult
	navigator.geolocation.getCurrentPosition(success_callback,error_callback);
		
	function success_callback(p){
		Session.set("geoPermissions",true);
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
	     Session.set("geoDenied",true);
	}
}