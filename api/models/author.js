const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  firstName: {
    type: String,
    maxlength: [50, "First name is too long."],
    required: true
  },
  lastName: {
    type: String,
    maxlength: [50, "Last name is too long."],
    required: true
  },
  description: {
    type: String
  },
  posts: {
    type: [{ type: Schema.Types.ObjectId, ref: "Posts" }]
  }
});

module.exports = mongoose.model("Author", AuthorSchema);
