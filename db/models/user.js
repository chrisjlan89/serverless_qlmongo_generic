"use strict";
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const { permissions } = require("../../enums");

const userSchema = new mongoose.Schema(
  {
    userType: {
      type: String,
      enum: permissions,
      default: "USER",
    },

    name: { type: String },
    hobbies: [{ type: String }],
    age: { type: Number },
    hometown: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
