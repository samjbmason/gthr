Template.notification.rendered= function(){

	$('.js-enable-notifications').click(function(event){
		event.preventDefault();
		if (webkitNotifications.checkPermission() != 0) { 
      webkitNotifications.requestPermission();
  	};
	});

	if (webkitNotifications.checkPermission() == 0) { 
      $('.notification-button').hide();
  	};

};
