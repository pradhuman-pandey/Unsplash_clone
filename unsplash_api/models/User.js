const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name: {type: String},
    email: {type:String, required:true,unique:true},
    password:  {type:String, required:true},
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;