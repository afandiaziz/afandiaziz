// import connect from "@/../server";
const { Experience } = require('../../models');

module.exports = async (req, res) => {
    try {
        const data = await Experience.find({}).sort({ current: -1, endDate: -1 });
        return res.json({
            status: 'success',
            data
        });
    } catch ({message}) {
        res.status(500).json({
            status: 'error',
            message
        });
    }
};
