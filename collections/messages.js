Messages = new Mongo.Collection('messages');

MessagesSchema = new SimpleSchema({
  author: {
    type: String
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
  },
  read: {
    type: Boolean,
    autoValue: function() {
      if (this.isInsert) {
        return false;
      }

    }
  }
});

Messages.allow({
  insert: function (userId) {
    return !!userId;
  }
});

Messages.attachSchema(MessagesSchema);