const mongoose = require("mongoose");

const StackSchema = new mongoose.Schema({}, { strict: false });
module.exports = mongoose.models.Stack || mongoose.model("Stack", StackSchema, 'stacks');
