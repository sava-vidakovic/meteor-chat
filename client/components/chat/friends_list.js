Template.FriendsList.onRendered(function () {
  var conf = {
    cursorcolor: "#696c75",
    cursorwidth: "4px",
    cursorborder: "none"
  };
  $('.list-friends').niceScroll(conf);
});

Template.FriendsList.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('userList')
  })
});

Template.FriendsList.events({
  'click .friend': function(){
    Session.set('currentRoom', this);
    Session.set('roomId', privateRoomId(this._id))
  }
});

Template.FriendsList.helpers({
  users: function () {
    return Meteor.users.find(
        {_id: {$ne: Meteor.userId()}},
        {sort: {"status.online": -1}}
    );
  },
  online: function () {
    return this.status.online;
  }
});

function privateRoomId(friendId) {
  var array = _.sortBy([friendId, Meteor.userId()], function(id){
    return id;
  });
  return array.join('');
}