// import the mongoose lib
const mongoose = require("mongoose");

// the model

const JokeSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, "{PATH} is required"],
    },
    punchLine: {
      type: String,
      required: [true, "{PATH} is required"],
    }
  },
  { timestamps: true }
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
