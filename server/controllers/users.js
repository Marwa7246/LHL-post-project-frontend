const User = require('../models/user');


exports.signUp = async (req, res, next)=> {
    const { email, password } = req.body;

    const user = new User();
    const savedUser = await user.save();

    res.status(200).json({msg: 'success'})
}