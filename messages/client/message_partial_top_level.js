Template.messagePartialTopLevel.helpers({
  messageDate: function(){
    if (this.createdAt !== undefined){
    return moment(this.createdAt).format('MMM D')
    }
  }
});

Template.messagePartial.helpers({
  messageDate: function(){
    if (this.createdAt !== undefined){
      return moment(this.createdAt).format('MMM D') + ' (' + moment(this.createdAt).fromNow() + ')'
    }
  }
});
