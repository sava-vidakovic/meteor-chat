Template.Header.events({
  'click .show-login-modal': function(){
    if(!Meteor.userId()) {
      $('#login-modal').openModal();
    }
  },
  'click .logout-user': function() {
    Meteor.logout();
  }
});