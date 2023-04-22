
const express = require('express');
const router = express.Router();
const controller = require('../container/data');
const User = require('../user');
const bcrypt = require('bcryptjs');
const app = express();


router.get('/',controller.home);
router.get('/login',controller.login);

router.get('/register',controller.register);

  
router.post("/register", async (req, res) => {
    try{
        const password = req.body.password;
        const cpassword = req.body.cpassword;
        if(password === cpassword){
          const user = new User({
            name : req.body.name,
            email : req.body.email,
            password : password,
          })
          const registered = await user.save();
        //   res.send('User created successfully');
        res.redirect('/');


        }else{
            res.send("passwords are not matching")
        }
    }catch(error){
        res.status(500).send('Server error');
    }
})

router.post("/login", async(req, res)=>{
  try{
      const email = req.body.email;
      const password =  req.body.password;

      const userEmail = await User.findOne({email});
      
      if(userEmail.password === password){
          res.redirect('/');
        //   console.log(email );
      }else{
          res.send("Invalid login details");
      }

  }catch(error){
      res.status(400).send("Invalid login details");
  }
})

module.exports = router