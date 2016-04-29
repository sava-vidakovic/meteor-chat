Template.Messages.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('messages', Session.get('roomId'));

    if(self.subscriptionsReady()){
      initScroll();
    }
  })

});

Template.Messages.helpers({
  roomName: function(){
    var room = Session.get('currentRoom');
    if(room){
      return Session.get('currentRoom').username;
    }
  },
  roomPhoto: function(){
    return Session.get('currentRoom').profile.avatar;
  },
  messages: function(){
    return Messages.find({roomId: Session.get('roomId')});
  }
});


function initScroll(){
  var conf = {
    cursorcolor: "#cdd2d6",
    cursorwidth: "4px",
    cursorborder: "none"
  };
  $('.messages').niceScroll(conf);
  $('.messages').getNiceScroll(0).doScrollTop(99999999999, 200);
}