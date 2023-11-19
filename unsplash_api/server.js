const express  = require('express')
const path = require('path')
const cors = require('cors');
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
// const multer = require('multer');
const cookieParser = require('cookie-parser');
// const imageDownloader = require('image-downloader');
const User = require('./models/User.js');
const Image = require('./models/Image.js');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.set("view engine", "ejs")
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'hfghjcvlblkj4f6b7gvyui7fvyt7ufvy9iv9o8ib';


app.post('/upload', async (req,res)=>{
    
  const {name, imageUrl} = req.body;
  try {
      await Image.create({name,imageUrl});
      res.status(200).json({message: 'Image uploaded successfully'})
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error uploading image' });
  }
});

app.get('/upload', async (req,res)=>{
   try {
       const allImagesUrl = await Image.find();
      //  console.log(JSON.parse(allImagesUrl));
       res.status(200).json({allImagesUrl});
   } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error uploading image' });
   }
})

app.delete('/delete/:id', async (req,res)=>{
    const imageId = req.params.id;

    try {
        const image = await Image.findById(imageId);
        if(!image)
        return res.status(404).json({message: 'Image not found'});
        await Image.findByIdAndRemove(imageId);
        res.json({message: 'Image deleted Successfully'})
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error deleting image'});
    }
});

app.post('/register', async (req,res)=>{
    const {name,email,password} = req.body;
    try {
       const UserDoc = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password,bcryptSalt)
       });
       res.status(200).json(UserDoc); 
    } catch (e) {
        res.status(404).json(e)
    }
})

app.post('/login', async (req,res) => {
    // mongoose.connect(process.env.MONGO_URL);
    const {email,password} = req.body;
    console.log(email,password);
    const userDoc = await User.findOne({email});
    if (userDoc) {
      const passOk = bcrypt.compareSync(password, userDoc.password);
      if (passOk) {
        jwt.sign({
          email:userDoc.email,
          id:userDoc._id
        }, jwtSecret, {}, (err,token) => {
          if (err) throw err;
          res.cookie('token', token).json({userDoc,token});
        });
      } else {
        res.status(422).json('pass not ok');
      }
    } else {
      res.json('not found');
    }
  });



app.get('/test', (req,res) => {
    res.json('test ok');
  });

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/unsplashclone').then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at port ${PORT}`);
    })
}).catch((error)=>{
    console.log("error",error);
})
