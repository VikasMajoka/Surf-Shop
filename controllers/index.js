const User =  require('../models/user');
const passport = require('passport');
module.exports = {

  //Post/register 
    async postRegister(req , res , next){
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        image: req.body.image
      });  
      await User.register (newUser, req.body.password);
            res.redirect('/');
    },

    //Post/login
    postLogin(req ,res ,next) {
      passport.authenticate('local',{
        successRedirect:'/',
        failureRedirect:'/login',
      })(req, res, next);
    },

    //Get/logout
    getLogout(req ,res ,next){
        req.logout((err)=>{
          if(err)  {
            throw err
          }
        });
        res.redirect('/');
      
      
    }     
  }

