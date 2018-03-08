require("dotenv").config();
const mongoose = require("mongoose");
const { Creature } = require("../models/CreatureModel");

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

const saved = async () => {
  await Creature.remove();
  const barry = new Creature({ name: "Barry", description: "It's Barry!" });
  await barry.save();
  const nigel = new Creature({ name: "Nigel", description: "It's Nigel!" });
  await nigel.save();
  db.close();
};

saved();
