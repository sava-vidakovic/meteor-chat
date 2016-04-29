Template.Message.helpers({
  user: function(userId){
    return Meteor.users.findOne({_id: userId}).username;
  },
  messageClass: function(authorId) {
    if(Meteor.userId() === authorId){
      return 'i'
    } else {
      return 'friend-with-a-SVAGina'
    }

  }
});