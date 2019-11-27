const { model, Schema } = require("mongoose");
//const PLM = require("passport-local-mongoose");

const categorySchema = new Schema (
  {
    name: {
      type: String,
      required: true
    },
    salvavidas: [
      {
        type: Schema.Types.ObjectId,
      }
    ],
  },
  {
    timestamps: true,
    versionKey: false
  }
);

//categorySchema.plugin(PLM, {usernameField: "email"});

module.exports = model("Category", categorySchema);
