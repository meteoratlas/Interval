const Post = require("../models/post");

exports.getAllPosts = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excluded = ["page", "sort", "limit", "fields"];
    excluded.forEach((i) => delete queryObj[i]);

    let queryString = JSON.stringify(queryObj);
    // get the equality comparison keys and convert them to mongoDB syntax ($ prefix)
    // gte = greater than or equals
    // gt = greater than
    // lt = less than
    // lte = less than or equals
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );
    let query = Post.find(JSON.parse(queryString));

    // sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query.sort("-datePosted");
    }

    // limit fields
    if (req.query.fields) {
      const fields = req.query.sort.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v"); // exclude this field
    }

    // pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 1;
    const skip = page - 1 * limit;

    query = query.skip(skip).limit(limit);

    // return error if
    if (req.query.page) {
      const pageNums = await Post.countDocuments();
      if (skip >= pageNums) {
        throw new Error("This page does not exist.");
      }
    }

    // execute the query
    const posts = await query;

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
