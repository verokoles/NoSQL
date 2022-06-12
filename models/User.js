const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema= new Schema(
    {
    username: {
        // String
        // Unique
        // Required
        // Trimmed
        type: String,
        unique: true,
        required: "Username is required!",
        trim: true
    },
 
    
    email: {

        // String
        // Required
        // Unique
        // Must match a valid email address (look into Mongoose's matching validation)
        type: String,
        required: true,
        unique: true,
        required: "Email is required!",
        match: [/.+@.+\..+/],
    },
   
    thoughts: [
        {
        // Array of _id values referencing the Thought model
        type: Schema.Types.ObjectId,
        ref: "Thought",
    },
],

    
    friends: [
        {
        // Array of _id values referencing the User model (self-reference)
    type: Schema.Types.ObjectId,
    ref: "User",
    },
],
},
{
    toJSON: {
        virtuals: true,

    },
    id:false,
}
);

   // Schema Settings
    // Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
UserSchema.virtual("freindCount").get(function () {
    return this.friends.length;
});
    const User = model("User", UserSchema);

module.exports = User;