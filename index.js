/**
 * Created by cem on 08.11.16.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var userSchema = Schema({
    _id: String,
    displayName: String,
    picture: String,
    address: String,
    ratings: [{
        task: {type: Number, ref: 'Task'},
        isExecutor: Boolean,
        value: Number,
        comment: String,
    }],
});

var taskSchema = Schema({
    _id: Number,
    createdBy: {type: String, ref: 'User'},
    assignedTo: {type: String, ref: 'User'},
    name: String,
    description: String,
    payment: Number,
    position: {
        latitude: Number,
        longitude: Number,
    },
    starts: {type: Date, default: Date.now},
    category: String,
    applications: [{
        user: {type: String, ref: 'User'},
        comment: String
    }],
});

taskSchema.methods.test = function () {
    console.log("test");
}

module.exports = {
    Task: mongoose.model('Task', taskSchema),
    User: mongoose.model('User', userSchema),
};