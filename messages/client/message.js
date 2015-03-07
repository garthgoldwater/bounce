Template.message.helpers({
  replies: function(){
    if(Session.get("selected")) {
      return Messages.find({parentId: Session.get("selected")});
    } else { return false; }
  },

  messageDate: function(){
    if (this.createdAt !== undefined){
      return moment(this.createdAt).format('MMM D') + ' (' + moment(this.createdAt).fromNow() + ')'
    }
  }
});
