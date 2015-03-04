 Template.newMessage.events({
  "submit .new-message": function(event, template) {
    var subject = template.find(".new-subject").value,
        body    = template.find(".new-body").value;

    event.preventDefault();

    Messages.insert({
      subject: subject,
      body: body,
      author: Meteor.user().emails[0].address,
      date: Date.new
    });

    event.target.reset();
  }
 });
