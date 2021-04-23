import { MongoClient } from 'mongodb';

export default async function connect() {

    const client = new MongoClient(process.env.DATABASE_URI, {

        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    if (!client.isConnected()) await client.connect();

    const db = client.db('Blog');

    return  { db, client};

}