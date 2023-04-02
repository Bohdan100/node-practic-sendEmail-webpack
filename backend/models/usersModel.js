const { model, Schema } = require("mongoose");

const userSchema = Schema(
  {
    name: {
      type: String,
      default: "Olaph Sholts",
    },
    email: {
      type: String,
      required: [true, "DB: email is required"],
    },
    password: {
      type: String,
      required: [true, "DB: password is required"],
    },
    token: {
      type: String,
      default: null,
    },
    roles: [{ type: String, ref: "Role" }],
  },
  { versionKey: false, timestamps: true }
);

module.exports = model("User", userSchema);
