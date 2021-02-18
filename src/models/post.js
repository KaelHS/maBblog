import mongoose from '../config/database';

const PostScehema = new mongoose.Schema({
    _id: {
        type: ObjectId,
        require: true,
    },
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