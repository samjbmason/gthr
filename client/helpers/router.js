Meteor.Router.add({
  '/': 'messagesList'
});

Meteor.Router.filters({
  'requireLogin': function(page) {
    if (Meteor.user())
      return page;
    else if (Meteor.loggingIn())
      return 'loading';
    else
      return 'loggedOut';
  }
});

Meteor.Router.filter('requireLogin', {only: 'messagesList'});