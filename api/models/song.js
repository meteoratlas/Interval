const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const SongSchema = new Schema({
  songName: {
    type: String,
    maxlength: [150, "Song name is too long."],
    required: true
  },
  recordingTitle: {
    type: String
  },
  artists: {
    type: [String]
  },
  releaseDate: {
    type: Date
  },
  releaseArtURL: {
    type: String
  }
});

module.exports = mongoose.model("Song", SongSchema);
