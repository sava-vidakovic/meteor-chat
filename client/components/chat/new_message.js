Template.NewMessage.events({
  'click .send': function(){
    newMessage();
  },
  'keydown textarea': function(event){
    if(event.which == 13){
      newMessage();
    }
  }
});


function newMessage() {
  var message = document.getElementById('message-text');
  Messages.insert({
    content: message.value,
    roomId: Session.get('roomId')
  });
  message.value = null;
  setTimeout(function(){
    $('.messages').getNiceScroll(0).doScrollTop(99999999999, 200);
  }, 200)
}