import PostController from '../../../controllers/PostController';

const postConstroller = new PostController();

export default function handler (req, res) {
    const {
        query: { pid },
        method,
    } = req;

    switch(method){
        case 'GET':
            postConstroller.list(req, res);
            break;
        case 'POST':
            postConstroller.create(req, res);
            break;
        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
            
    }
    res.send(`Post: ${pid}`)

}