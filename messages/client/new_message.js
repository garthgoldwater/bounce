Template.newMessage.helpers({
  parentSubject: function(){
    var parentMessageId = Session.get("selected");
    var parentMessage = Messages.findOne(parentMessageId);
    return parentMessage.subject;
  },
});

  Template.newMessage.events({
  "submit .new-message": function(event, template) {
    var body          = template.find(".new-body").value,
        createdAt     = moment().format(),
        parent        = Messages.findOne(Session.get("selected")) || false,
        subject,
        parentId      = null;

    if(parent) {
      parentId = parent._id;
      subject = parent.subject;
    } else {
      subject = template.find('.new-message').val() || '' ;
    }

    event.preventDefault();

  newMessage = _.extend({
    subject: subject,
    body: body,
    author: Meteor.user().emails[0].address,
    createdAt: createdAt,
    parentId: parentId
  });

  Messages.insert(newMessage);

  event.target.reset();
  }
});
