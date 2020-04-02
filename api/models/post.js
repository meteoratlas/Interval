const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    maxlength: [100, "Title is too long."],
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  song: {
    type: Schema.Types.ObjectId,
    ref: "Song"
  },
  description: {
    type: String,
    required: true
  },
  datePosted: {
    type: Date,
    default: Date.now(),
    required: true
  },
  dateLastEdited: {
    type: Date,
    default: Date.now()
  },
  likes: {
    type: Number,
    default: 0
  },
  shares: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("Posts", PostSchema);
