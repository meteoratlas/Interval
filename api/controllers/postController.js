const Post = require("../models/post");
const httpMethods = require("../controllers/httpMethods");

exports.getAllPosts = httpMethods.getAll(Post);
exports.getPost = httpMethods.getOne(Post);
exports.updatePost = httpMethods.updateOne(Post);
exports.deletePost = httpMethods.deleteOne(Post);

// TODO: double check that this passes the exact info we want
exports.createPost = httpMethods.createOne(Post);
