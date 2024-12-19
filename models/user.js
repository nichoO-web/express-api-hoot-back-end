const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
      type: String,
      unique: true,
      trim: true,
      required: true
    },
    hashedPassword: {
      type: String,
      trim: true,
      required: true
    },
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.hashedPassword;
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;