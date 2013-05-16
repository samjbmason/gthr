messagesHandle= Meteor.subscribeWithPagination('messages',200);

Meteor.subscribe('userPresence');