const Post = require("../models/post");
const APIFeatures = require("../utils/apiFeatures");

exports.getAllPosts = async (req, res) => {
    try {
        // execute the query
        const features = new APIFeatures(Post.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .pagination();
        const posts = await features.query;

        res.status(201).json({
            status: "success",
            results: posts.length,
            data: {
                posts,
            },
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error,
        });
    }
};

exports.createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                post,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error,
        });
    }
};

exports.getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(201).json({
            status: "success",
            data: {
                post,
            },
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error,
        });
    }
};

exports.updatePost = async (req, res) => {
    try {
        const updated = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        }); // {new:true} returns the updated post
        res.status(200).json({
            status: "success",
            data: {
                post: updated,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error,
        });
    }
};
exports.deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: "success",
            data: {
                post: null,
            },
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error,
        });
    }
};

exports.getPostStats = async (req, res) => {
    try {
        const stats = await Post.aggregate([
            {
                $match: { likes: { $gte: 50 } },
            },
            {
                $group: {
                    _id: null, // group all together
                    avgShares: { $avg: "$shares" },
                    numShares: { $sum: "$shares" },
                },
            },
            {
                $sort: {
                    avgShares: 1, // 1 for ascending
                },
            },
        ]);
        res.status(200).json({
            status: "success",
            data: {
                stats,
            },
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error,
        });
    }
};
