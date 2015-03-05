 Template.newMessage.events({
  "submit .new-message": function(event, template) {
    var subject = template.find(".new-subject").value,
        body    = template.find(".new-body").value;

    event.preventDefault();

    newMessage = _.extend({
      subject: subject,
      body: body,
      author: Meteor.user().emails[0].address,
      date: Date.new
    });


    Messages.insert(newMessage);

    event.target.reset();
  }
 });
