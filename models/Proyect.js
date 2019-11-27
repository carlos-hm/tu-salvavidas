const { model, Schema } = require("mongoose");
//const PLM = require("passport-local-mongoose");

const proyectSchema = new Schema (
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      enum: ["pintura", "plomeria", "electricista", "fumigacion", "albanileria", "impermea", "carpinteria", "jardineria", "herreria", "ldomestica", "lavanderia", "lblanca", "relectro", "scocina"]
    },
    zone: {
      type: String,
      enum: ["tlalpan", "carranza", "azcapotzalco", "iztapalapa", "iztacalco", "mhidalgo", "mcontreras", "coyoacan", "malta", "tlahuac", "bjuarez", "cmorelos", "gmadero", "cuauhtemoc", "aobregon", "xochimilco"]
    },
    creatorID: {
      type: Schema.Types.ObjectId,
      required: true
    },
    workerID: {
      type: Schema.Types.ObjectId,
    },
    photoURL: {
      type: String,
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Proyect", proyectSchema);