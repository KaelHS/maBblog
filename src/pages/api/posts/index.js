import connect from '../../../config/database';

export default async function getPosts (req, res) {

    if(req.method === 'POST') {
        
        const { title, author, content } = req.body;

        const { db } = await connect();

        await db.collection('posts').insertOne({
            title: title,
            author: author,
            content: content,
            date: new Date(),
        });

        res.status(201).json({ message: "Post Criado!"});
        
    }  else {

        const { db } = await connect();

        const responses = await db.collection('posts').find().toArray();
        
        // const responses = await db.collection('posts').find( {}, (err, data) => { 
        //     if (err) {
        //         console.log("Não foi possível acessar o DB")
        //     } else return data; })
        //     .toArray();

        
        return res.json(responses)
    }
}