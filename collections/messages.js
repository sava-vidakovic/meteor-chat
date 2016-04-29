Messages = new Mongo.Collection('messages');

MessagesSchema = new SimpleSchema({
  author: {
    type: String,
    autoValue: function () {
      return Meteor.userId();
    }
  },
  content: {
    type: String
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  },
  roomId: {
    type: String
  }
});

Messages.allow({
  insert: function (userId, doc) {
    return !!userId;
  }
});

Messages.attachSchema(MessagesSchema);