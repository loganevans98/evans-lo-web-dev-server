import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    comments: {type: Number, default: 0},
    retweets: {type: Number, default: 0},
    liked: {type: Boolean, default: false},
    disliked: {type: Boolean, default: false},
    avatar: {type: String, default: "../images/me.jpeg"},
    handle: {type: String, default: "Logan Evans"},
    postedBy: {
        username: {type: String, default: "loganevans98"}
    }
}, {collection: 'tuits'});
export default schema;