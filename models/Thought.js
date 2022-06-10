const { Query } = require("mongoose")

thoughtText
Stringrequired
must be between 1 ad 128

createdAt:
Dateset defautl value to current timestamp
use a getter method to format timestamp on Query

username:
String
required

reactions:
array of nested docs created swith reactionSchema

schema:
create virtual called reactionCount that retreives the length 
of th thoughts reactions arrayfield on Query

