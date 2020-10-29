
signUp = (req, res, next)=> {
    console.log('route hit');
    console.log(req.body);
    res.status(200).json({msg: 'success'})
};

login = (req, res, next)=> {
    console.log('route hit-login');
    console.log(req.body);
    res.status(200).json({msg: 'success-login'})
};



module.exports= {signUp, login}