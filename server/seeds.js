Meteor.methods({
  'db:seed': function () {
    _.each(_.range(25), function () {
      var randomEmail = faker.internet.email();
      var randomName = faker.name.findName();
      var randomAvatar = faker.image.image();
      Accounts.createUser({
        profile: {
          username: randomName,
          avatar: randomAvatar
        },
        email: randomEmail,
        password: 'foobar123'
      });
    });
    console.log('Seed accounts...')
  }
});