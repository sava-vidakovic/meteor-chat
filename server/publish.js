Meteor.publish('userList', function () {
  return Meteor.users.find();
});

Meteor.publish('messages', function (roomId) {
  return Messages.find({roomId: roomId});
});