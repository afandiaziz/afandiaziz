import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // pass: process.env.MONGODB_PASSWORD,
        });
    } catch (error) {
        throw new Error("Error connecting to database: " + error);
    }
};

export default connect;
