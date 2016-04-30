Template.NewMessage.events({
  'click .send': function(){
    newMessage();
  },
  'keydown textarea': function(event){
    if(event.which == 13){
      event.preventDefault();
      newMessage();
    }
  }
});


function newMessage() {
  var message = $('#message-text');
  Messages.insert({
    content: message.val(),
    roomId: Session.get('roomId')
  });
  message.val('');
  setTimeout(function(){
    $('.messages').getNiceScroll(0).doScrollTop(99999999999, 0);
  }, 200)
}