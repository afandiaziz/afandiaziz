const { Profile } = require('../../models');

module.exports = async (req, res) => {
    try {
        const data = await Profile.findOne();
        return res.json({
            message: 'success',
            data
        });
    } catch (error) {
        res.status(500).json({
            message: 'error',
            message: error
        });
    }
};
