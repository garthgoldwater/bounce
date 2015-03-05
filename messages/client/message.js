Template.message.helpers({
  replies: function(){
    if(Session.get("selected")) {
      return Messages.find({parentId: Session.get("selected")});
    } else return null;
  },
});
