if (Messages.find().count() === 0) {
  var now = new Date().getTime();

  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman' }
  });
  var tom = Meteor.users.findOne(tomId);

  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif' }
  });
  var sacha = Meteor.users.findOne(sachaId);
  
  Messages.insert({
    content: 'Hi everyone',
    userId: sacha._id,
    name: sacha.profile.name,
    submitted: now - 5 * 3600 * 1000
  });

  Messages.insert({
    content: 'Hi Sacha',
    userId: tom._id,
    name: tom.profile.name,
    submitted: now - 7 * 3600 * 1000
  });

  Messages.insert({
    content: 'Wow this is cool',
    userId: tom._id,
    name: tom.profile.name,
    submitted: now - 8 * 3600 * 1000,
  });

  for (var i = 0; i < 10; i++) {
    Messages.insert({
      content: 'Test message #' + i,
      name: sacha.profile.name,
      userId: sacha._id,
      submitted: now - i * 3600 * 1000
    });
  }
}