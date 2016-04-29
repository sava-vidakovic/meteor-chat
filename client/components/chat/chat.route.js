FlowRouter.route('/chat', {
  name: 'chat',
  action: function(){
    BlazeLayout.render('MainLayout', {main: 'Chat'});
  }
});