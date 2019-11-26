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
    locations: {
      Tlalpan: "",
      Carranza: "",
      Azcapotzalco: "",
      Iztapalapa: "",
      Iztacalco: "",
      Miguel: "",
      Magdalena: "",
      Coyoacan: "",
      Milpa: "",
      Tlahuac: "",
      Benito: "",
      Cuajimalpa: "",
      Gustavo: "",
      Cuauhtemoc: "",
      Obregon: "",
      Xochimilco: ""
    },
    categories: {
      Pintura: "",
      Plomeria: "",
      Electricista: "",
      Fumigacion: "",
      Albanileria: "",
      Impermeabilizacion: "",
      Carpinteria: "",
      Jardineria: "",
      Herreria: "",
      Limpieza: "",
      Lavanderia: "",
      Reparacion: "",
      Cocina: "",
        //type: String,
        //enum: ["Pintura", "Plomería", "Electricista", "Fumigación", "Albañilería", "Impermeabilización", "Carpintería", "Jardinería", "Herrería", "Limpieza doméstica", "Lavandería", "Reparación de línea blanca", "Servicio de cocina"]
    },
    worksDone: {
      type: Number,
      default: 0,
    },
    workPhotos: [
      {
        type: String
      }
    ],
    rating: {
        type: Number
    },
    reviews: [
      {
        type: String
      }
    ],
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: "email"});

module.exports = model("User", userSchema);