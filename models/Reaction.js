reactionId:
use mongoodes ObjectId data typeof
default: new ObjectId

reactionBody:
Stringrequired
280 character max

username:
String
required

createdAt:
Date
set default value to current timestamp
use getter method to format th timestamp on query 

Schema:
reaction fields subdoc in Thought method
