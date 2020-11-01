const User = require('../models/user');


signUp = async (req, res, next)=> {
    const { email, password } = req.body;

    const user = new User();
    const savedUser = await user.save();

    res.status(200).json({msg: 'success'})
};

login = (req, res, next)=> {
    console.log('route hit-login');
    console.log(req.body);
    res.status(200).json({msg: 'success-login'})
};



module.exports= {signUp, login}