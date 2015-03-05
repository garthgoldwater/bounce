Template.messages.helpers({
  messages: function() {
    return Messages.find({ parentId: {$exists: false}});
  },
  selectedMessage: function() {
    if(Session.get("selected")) {
      return Messages.findOne(Session.get("selected"));
    }else { return null; }
  }
});

Template.messages.events({
  "click .top-level-message": function(event, template){
    Session.set("selected", this._id);
    console.log("you clicked " + this._id);
  }
});
