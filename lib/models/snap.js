var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SnapSchema = new Schema({
    filepath: {type: String, default: '/images/ohstop.png'},
    upVotes: {type: Number, default: 0},
    downVotes: {type: Number, default: 0},

    dateAdded: {type: Date, default: Date.now},
    fromUser: {type: String, default: "anon"}
});

mongoose.model("Snap", SnapSchema);