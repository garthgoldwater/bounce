Meteor.publish('messages', function() {
  return Messages.find();
});

// Meteor.publish('replies', function(topLevelMessageId) {
//   return Messages.find({ parentId: topLevelMessageId});
// });
