const { Profile } = require('../../models');

module.exports = async (req, res) => {
    try {
        const data = await Profile.findOne();
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
