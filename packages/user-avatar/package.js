Package.describe({
  name: 'chat:user-avatar'
});

Package.onUse(function (api) {

  api.addFiles(['user-avatar.js'], ['client']);
  api.addAssets(['no-avatar.jpg'], ['client']);


  api.export("UserAvatar", 'client');

});