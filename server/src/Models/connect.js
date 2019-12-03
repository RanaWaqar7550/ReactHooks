import mongoClient from 'mongodb';

const { MongoClient } = mongoClient;
// Connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'ReactHooks';

let db = null;

export const getCollections = () => ({
  usersCollection: db.collection('users'),
});

export const connectDatabase = () => {
  MongoClient.connect(url, (err, client) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err.message);
      return;
    }
    // eslint-disable-next-line no-console
    console.log('Connected successfully to server');
    db = client.db(dbName);
  });
};
