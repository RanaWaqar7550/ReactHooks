/* eslint-disable no-param-reassign */
export const filterUserData = (user) => {
  const userDataType = toString.call(user);
  if (userDataType === '[object Array]') {
    user = user.map((userObject) => {
      delete userObject.password;
      return userObject;
    });
  } else if (userDataType === '[object Object]') {
    delete user.password;
  }
  return user;
};
