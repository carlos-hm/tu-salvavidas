const { model, Schema } = require("mongoose");

const messageSchema = new Schema (
  {
    description: {
      type: String,
      required: true
    },
    projectID: {
      type: Schema.Types.ObjectId
    },
    projectTitle: {
      type: String
    },
    creatorID: {
      type: Schema.Types.ObjectId
    },
    workerID: {
      type: Schema.Types.ObjectId
    },
    workerEmail: {
      type: String
    },
    workerPhone: {
      type: Number
    },
    workerName: {
      type: String
    }
  },
  {
    timestamps: true,
    versioKey: false,
  }
);

module.exports = model("Message", messageSchema);