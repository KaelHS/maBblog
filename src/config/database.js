<<<<<<< HEAD
import { MongoClient } from 'mongodb';

let cachedDb = null;

const client = new MongoClient(process.env.DATABASE_URI, {

      useUnifiedTopology: true,
      useNewUrlParser: true
});


export default async function connect() {
    if (!client.isConnected()) await client.connect();

    //const dbName = url.parse(process.env.DATABASE_URL).pathname.substr(1);

    const db = client.db('Blog');
    
    cachedDb = db;

    return {db, client};
}
=======
const mongoose = require('mongoose');

mongoose.connect('mongodb://Blog', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

export default mongoose;
>>>>>>> cad6fb189bc930a69411f2e6fe1634e3c4518ad0
