import Post from '../models/post';

export default class PostController {

    async create(req, res) {
        try {
            const post = await Post.create(req.body);
            return res.status(201).send({ post: post});
        } catch (error) {
            return res.status(400).send({ error: 'Post não foi criado =/'});
        };
    };

    async list(req, res) {
        try {
            const post = await Post.find();
            return res.status(201).send({ post: post });
        } catch(error) {
            return res.status(400).send({ error: "Post não foi encontrado! "});
        };
    };
};
