exports.signUp = (req, res, next)=> {
    console.log('route hit');
    console.log(req.body);
    res.status(200).json({msg: 'success'})
}