Messages = new Meteor.Collection('messages');

Meteor.methods({
  postMessage: function(messageAttributes) {
    var user = Meteor.user();

    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to use the chat!");

    // ensure the post has content
    if (!messageAttributes.content)
      throw new Meteor.Error(422, 'A message has to have content silly!');

    // pick out the whitelisted keys
    var message = _.extend(_.pick(messageAttributes, 'content'), {
      userId: user._id, 
      name: user.username, 
      submitted: new Date().getTime()
    });

    return Messages.insert(message);
    
  }
});