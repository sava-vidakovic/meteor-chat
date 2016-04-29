FlowRouter.triggers.enter([function(){
  if(!Meteor.userId()) {
    FlowRouter.go('home');
  }
}]);
