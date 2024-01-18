// import connect from "@/../server";
const { Stack } = require('../../models');

module.exports = async (req, res) => {
    try {
        const data = await Stack.find();
        return res.json({
            message: 'success',
            data
        });
    } catch ({message}) {
        res.status(500).json({
            status: 'error',
            message
        });
    }
};
