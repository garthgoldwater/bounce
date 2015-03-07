Template.newMessageTopLevel.events({
  "submit .new-message-top-level": function(event, template) {
    var subject       = template.find(".new-subject-top-level").value,
        body          = template.find(".new-body-top-level").value;

    event.preventDefault();

  newMessage = _.extend({
    subject: subject,
    body: body,
    author: Meteor.user().emails[0].address,
    createdAt: moment().format(),
    parentId: null
  });

  Messages.insert(newMessage);

  event.target.reset();
  }
});
