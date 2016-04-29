Template.FriendsList.onRendered(function(){
  var conf = {
    cursorcolor: "#696c75",
    cursorwidth: "4px",
    cursorborder: "none"
  };
  $('.list-friends').niceScroll(conf);
});

Template.FriendsList.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('userList')
  })
});

Template.FriendsList.helpers({
  users: function() {
    return Meteor.users.find();
  }
});