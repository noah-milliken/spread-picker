const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const weekSchema = new Schema(
  {
    week: {
      type: Number,
      required: true,
    },
    games: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Week", weekSchema);
