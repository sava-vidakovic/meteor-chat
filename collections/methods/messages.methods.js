Meteor.methods({
  markAsRead: markAsRead
});

function markAsRead(roomId) {
  Messages.update({
    roomId: roomId,
    read: false,
    author: {$ne: Meteor.userId()}
  }, {$set: { read: true }}, {multi: true})
}
