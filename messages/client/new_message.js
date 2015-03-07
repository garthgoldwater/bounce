Template.newMessage.helpers({
  parentSubject: function(){
    var parentMessageId = Session.get("selected");
    var parentMessage = Messages.findOne(parentMessageId);
    return parentMessage.subject;
  },
});
  
  Template.newMessage.events({
  "submit .new-message": function(event, template) {
    var subject       = template.find(".new-subject").value,
        body          = template.find(".new-body").value,
        // createdAt     = new Date(),
        parent        = Messages.findOne(Session.get("selected")) || false,
        parentId      = null;

    if(parent) {
      parentId = parent._id
    }

    event.preventDefault();

  newMessage = _.extend({
    subject: subject,
    body: body,
    author: Meteor.user().emails[0].address,
    createdAt: Date.now(),
    parentId: parentId
  });


  Messages.insert(newMessage);

  event.target.reset();
  }
});
