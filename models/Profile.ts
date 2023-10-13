import mongoose, { Schema } from "mongoose";

const ProfileSchema = new Schema({
    displayName: String,
    email: String,
    headline: String,
    location: String,
    about: String,
    id: Number,
    username: String,
    profilePictureUrl: String,
    Tags: Array,
    Badges: Array,
}, {
    timestamps: true,
});
// const ProfileSchema = new Schema({}, { strict: false });
export default mongoose.models.Profile || mongoose.model("Profile", ProfileSchema, 'profile');
