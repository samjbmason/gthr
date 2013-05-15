Meteor.Router.add({
  '/': 'chatPage',
  '/about': 'aboutPage'
});

Meteor.Router.filters({
  'requireLogin': function(page) {
    if (Meteor.user())
      return page;
    else if (Meteor.loggingIn())
      return 'loading';
    else
      return 'loggedOut';
  },
  'clearErrors': function(page) {
    clearErrors();
    return page;
  }
});

Meteor.Router.filter('requireLogin', {only: 'chatPage'});
Meteor.Router.filter('clearErrors');