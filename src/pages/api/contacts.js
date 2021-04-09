import connect from '../../config/database';

export default async function insertContact (req, res) {

    if(req.method === 'POST') {
        
        const { cname, cemail, message } = req.body;

        const { db } = await connect();

        await db.collection('contacts').insertOne({
            cname: cname,
            cemail: cemail,
            message: message,
            date: new Date(),
        });

        res.status(201).json({ message: "Mensagem Enviada!"});
        
    } else {
        const { db } = await connect();
        

        const responses = await db.collection('posts').find( {}, (err, data) => { 
            if (err) {
                console.log("Não foi possível acessar o DB")
            } else return data; })
            .toArray();
        
        res.status(200).json(responses)
    }
}
