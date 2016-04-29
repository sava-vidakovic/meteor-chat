Template.Messages.onRendered(function(){
  var conf = {
    cursorcolor: "#cdd2d6",
    cursorwidth: "4px",
    cursorborder: "none"
  };
  $('.messages').niceScroll(conf);
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
  }
});
