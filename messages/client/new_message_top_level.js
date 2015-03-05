Template.newMessageTopLevel.events({
  "submit .new-message-top-level": function(event, template) {
    var subject       = template.find(".new-subject-top-level").value,
        body          = template.find(".new-body-top-level").value,
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


  console.log(Messages.insert(newMessage));

  event.target.reset();
  }
});
