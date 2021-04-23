const connect = require ('../../../config/database');

export default async (req, res) => {

    if (req.method === 'GET') {

       const { title } = req.query;
           
       const { db } = await connect();
       
       const response =  await db.collection('posts').findOne({ title: title });

       if(!response) {
           res.status(400).json({ error: "Title not Found! " })
       }

       res.status(200).json(response);

   } else {
           res.setHeader('Allow', ['GET'])
           res.status(405).end(`Method ${method} Not Allowed`)
   }
}
