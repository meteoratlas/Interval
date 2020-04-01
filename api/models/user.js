const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: {
    type: String,
    maxlength: [50, "Username is too long."],
    required: true
  },
  description: {
    type: String
  },
  posts: {
    type: [{ type: Schema.Types.ObjectId, ref: "Posts" }]
  }
});

module.exports = mongoose.model("User", UserSchema);
