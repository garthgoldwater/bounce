Template.newMessage.events({
  "submit .new-message": function(event, template) {
    var subject       = template.find(".new-subject").value,
        body          = template.find(".new-body").value,
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
