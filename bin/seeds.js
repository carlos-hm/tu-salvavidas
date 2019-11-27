const mongoose = require('mongoose');
const Category = require("../models/Category");

mongoose.connect(process.env.DB);

const categories = [
  {
    name: "Pintura",
    salvavidas: [
        '5ddc47d24fd1f50d8e883eb5'
    ]
  },
  {
    name: "Plomería",
  },
  {
    name: "Electricista",
  },
  {
    name: "Fumigación",
  },
  {
    name: "Albanileria",
  },
  {
    name: "Impermeabilización",
  },
  {
    name: "Carpintería",
  },
  {
    name: "Jardinería",
  },
  {
    name: "Herrería",
  },
  {
    name: "Limpieza",
  },
  {
    name: "Lavandería",
  },
  {
    name: "Línea blanca",
  },
  {
    name: "Electrodomésticos"
  },
  {
    name: "Cocina",
  },
];

Category.create(categories, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${categories.length} categories`)
  mongoose.connection.close();
});