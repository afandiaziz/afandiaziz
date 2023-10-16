const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema({}, { strict: false });
module.exports = mongoose.models.Experience || mongoose.model("Experience", ExperienceSchema, 'experiences');
