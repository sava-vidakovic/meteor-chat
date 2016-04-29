FlowRouter.route('/', {
  name: 'home',
  action: function(){
    isLoggedIn();
    BlazeLayout.render('HomeLayout');
  }
});

function isLoggedIn() {
  if(Meteor.userId()){
    FlowRouter.go('chat')
  }
}