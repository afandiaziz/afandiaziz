import mongoose from "mongoose";
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://userreadonly:h41aQ2fdphj7ra40@cluster0.3pwobjt.mongodb.net/portfolio?retryWrites=true&w=majority&dbName=portfolio', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // pass: process.env.MONGODB_PASSWORD,
        });
    } catch (error) {
        throw new Error("Error connecting to database: " + error);
    }
};

export default connect;
