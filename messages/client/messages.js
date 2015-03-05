Template.messages.helpers({
  messages: function() {
    return Messages.find();
  },
  selectedMessage: function() {
    return Messages.findOne(Session.get("selected"));
  }
});

Template.messages.events({
  "click .message": function(event, template){
    Session.set("selected", this._id);
    console.log("you clicked " + this._id);
  }
});
