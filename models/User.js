const { model, Schema } = require("mongoose");
const PLM = require("passport-local-mongoose");

const userSchema = new Schema (
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    role: {
      type: String,
      required: true,
      enum: ["Cliente", "Salvavidas"],
      default: "Cliente"
    },
    photoURL: {
      type: String,
      default: "https://image.flaticon.com/icons/svg/1913/1913415.svg"
    },
    description: {
      type: String,
    },
    worksDone: {
      type: Number,
      default: 0,
    },
    rating: {
        type: Number
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: "email"});

module.exports = model("User", userSchema);