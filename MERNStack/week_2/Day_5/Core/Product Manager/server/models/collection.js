// import the mongoose lib
const mongoose = require("mongoose");

// the model

const CollectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "{PATH} is required"],
    },
    description: {
      type: String,
      required: [true, "{PATH} is required"],
    },
    price: {
      type: Number,
      required: [true, "{PATH} is required"],
      min: [0, "negative"],
    }
  },
  { timestamps: true }
);

const Collection = mongoose.model("Collection", CollectionSchema);

module.exports = Collection;
