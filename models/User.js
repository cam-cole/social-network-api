const { Schema, model} = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
        },
        thoughts: {

        },
        friends: {

        }
    }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.reduce(
        (total, friend) => total + friend.length + 1,
        0
    );
});

const User = model('User', UserSchema);

module.exports = User;