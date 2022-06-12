const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = new Schema(
    {
        reactionId: {
        // use mongoodes ObjectId data typeof
        type: Schema.Tyoes.ObjectId,
        // default: new ObjectId
        default: () => new Types.ObjectId(),
        },
        
        reactionBody: {
        type: String,
        required: true,
        maxlength: 280 
        },

        username: {
            type: String,
            required: true
        }
      
        
        createdAt: {
            type: Date,
            // set default value to current timestamp
            default: Date.now,
            // use getter method to format th timestamp on query 
            get: (timestamp) => dateFormat(timestamp),
            
        },
    },
    { toJSON: {
        getters: true,
    },
id: false,
}
;)

module.exports = ReactionSchema;
