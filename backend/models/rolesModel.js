const { model, Schema } = require("mongoose");

const roleSchema = Schema(
  {
    value: {
      type: String,
      default: "User",
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = model("Role", roleSchema);
