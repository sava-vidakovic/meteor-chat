currentRoom = function(){
  return Session.get('currentRoom');
};

Template.Messages.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('messages', Session.get('roomId'));

    if(self.subscriptionsReady() && currentRoom()){
      initScroll();
    }
  })

});

Template.Messages.helpers({
  roomName: function(){
    if(currentRoom()){
      return currentRoom().username;
    }
  },
  roomPhoto: function(){
    return currentRoom().profile.avatar;
  },
  messages: function(){
    return Messages.find({roomId: Session.get('roomId')});
  }
});


function initScroll(){
  var element = $('.messages');
  var conf = {
    cursorcolor: "#cdd2d6",
    cursorwidth: "4px",
    cursorborder: "none"
  };
  element.niceScroll(conf);
  element.getNiceScroll(0).doScrollTop(99999999999, 200);
}
