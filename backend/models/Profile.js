const mongoose = require("mongoose");

// const ProfileSchema = new Schema({
//     displayName: String,
//     email: String,
//     headline: String,
//     location: String,
//     about: String,
//     id: Number,
//     username: String,
//     profilePictureUrl: String,
//     Tags: Array,
//     Badges: Array,
//     resumeUrl: String,
// }, {
//     timestamps: true,
// });
const ProfileSchema = new mongoose.Schema({}, { strict: false });
module.exports = mongoose.models.Profile || mongoose.model("Profile", ProfileSchema, 'profile');
