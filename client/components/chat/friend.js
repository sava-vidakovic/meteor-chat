Template.Friend.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('unreadMessages', privateRoomId(self.data._id));
  })
});

Template.Friend.helpers({
  online: function () {
    return this.status.online;
  },
  avatar: function (user) {
    return UserAvatar.getAvatar(user);
  },
  unreadMessages: function () {
    return Messages.find(
        {
          roomId: privateRoomId(this._id),
          read: false,
          author: {$ne: Meteor.userId()}
        }
    ).count();
  }
});

function privateRoomId(friendId) {
  var array = _.sortBy([friendId, Meteor.userId()], function (id) {
    return id;
  });
  return array.join('');
}