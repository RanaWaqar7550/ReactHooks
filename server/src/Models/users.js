import { getCollections } from './connect';

export const createUser = (data) => new Promise((resolve, reject) => {
  getCollections().usersCollection.insert(data, (err, result) => {
    if (err) {
      return reject(err);
    }
    return resolve(result);
  });
});

export const getUsers = () => new Promise((resolve, reject) => {
  getCollections().usersCollection.find({}).toArray((err, result) => {
    if (err) {
      return reject(err);
    }
    return resolve(result);
  });
});

export const userLoginAuthentication = (data) => new Promise((resolve, reject) => {
  getCollections().usersCollection.find(data).toArray((err, result) => {
    if (err || (result && !result.length)) {
      return reject(err || 'Email or password is incorrect.');
    }
    return resolve(result);
  });
});

export const isUserExists = ({ email, username }) => new Promise((resolve, reject) => {
  getCollections().usersCollection.findOne({ $or: [{ email }, { username }] }, (err, result) => {
    if (err || result) {
      return reject(err || 'username or email already exists');
    }
    return resolve(result);
  });
});
