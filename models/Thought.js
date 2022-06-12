const { Schema, model, Types} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const { Query } = require("mongoose");
const { type } = require('express/lib/response');

const ThoughtSchema = new Schema(
    {

thoughtText: {
   type: String,
   required: true,
   maxlength: 128,
   minlength: 1
},

createdAt: {
type: Date,
    // Dateset defautl value to current timestamp
  default:  Date.now,
    // use a getter method to format timestamp on Query
get: (timestamp) =>dateFormat(timestamp),
},


username: {
    type: String,
    required: true

},


reactions:
    [ReactionSchema],
    // array of nested docs created swith reactionSchema
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
}
);
// schema:
// create virtual called reactionCount that retreives the length 
ThoughtSchema.virtual("reactionCount").get(fucntion() {
    return this.reactions.length;
});
// of th thoughts reactions arrayfield on Query
const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;