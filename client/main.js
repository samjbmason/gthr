messagesHandle= Meteor.subscribeWithPagination('messages',200);

presence= Meteor.subscribe('userPresence');