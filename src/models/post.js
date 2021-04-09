import mongoose from '../config/database';

const PostScehema = new mongoose.Schema({
<<<<<<< HEAD
=======
    _id: {
        type: ObjectId,
        require: true,
    },
>>>>>>> cad6fb189bc930a69411f2e6fe1634e3c4518ad0
    title: {
        type: String,
        require: true,
    },
    author: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

});

const Post = mongoose.model('Post', PostScehema);

export default Post;