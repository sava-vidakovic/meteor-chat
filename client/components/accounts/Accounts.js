AccountsTemplates.addFields([
  {
    _id: 'username',
    required: true,
    type: 'text',
    displayName: 'Username'
  }
]);

Accounts.onLogin(function(){
  closeModal();
  FlowRouter.go('chat');
});
Accounts.onLogout(function(){
  FlowRouter.go('home');
  Session.set('roomId', null);
  Session.set('currentRoom', null);
});

function closeModal() {
  $('#login-modal').closeModal();
}

