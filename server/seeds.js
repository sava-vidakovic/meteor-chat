Meteor.methods({
  'db:seed': function () {
    Accounts.createUser({
      profile: {
        avatar: faker.image.image()
      },
      username: 'Sava',
      email: 'sava89@ymail.com',
      password: 'foobar123'
    });

    _.each(_.range(25), function () {
      var randomEmail = faker.internet.email();
      var randomName = faker.name.findName();
      var randomAvatar = faker.image.image();
      var userStatus =  {
        "online": false,
            "lastLogin": {
          "date": "2016-04-29T19:37:42.928Z"
        },
        "logoutTime": {
          "date": "2016-04-29T19:37:42.928Z"
        },
        "idle": false
      };

      var user = Accounts.createUser({
        profile: {
          avatar: randomAvatar
        },
        username: randomName,
        email: randomEmail,
        password: 'foobar123'
      });

      Meteor.users.update(user, {
        $set: {
          status: userStatus
        }
      });

      console.log(user)
    });
  }
});