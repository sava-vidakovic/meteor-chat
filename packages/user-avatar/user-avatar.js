UserAvatar = {
  getAvatar: getAvatar
};


/// Private

function getAvatar(user) {
  if(user.profile && user.profile.avatar) {
    return user.profile.avatar
  } else {
    return '/packages/chat_user-avatar/no-avatar.jpg'
  }
}