/**
 * Created by cem on 08.11.16.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var userSchema = Schema({
    _id: String,
    email: String,
    displayName: String,
    picture: String,
    address: String,
});

var ratingSchema = Schema({
    _id: String,
    assignedTo: {type: String, ref: 'User'},
    task: {type: String, ref: 'Task'},
    isExecutor: Boolean,
    value: Boolean,
    comment: String,
});

var applicationSchema = Schema({
    _id: String,
    user: {type: String, ref: 'User'},
    task: {type: String, ref: 'Task'},
    comment: String,
});

var taskSchema = Schema({
    _id: String,
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
});

taskSchema.methods.test = function () {
    console.log("test");
}

module.exports = {
    Task: mongoose.model('Task', taskSchema),
    User: mongoose.model('User', userSchema),
    Application: mongoose.model('Application', applicationSchema),
    Rating: mongoose.model('Rating', ratingSchema),
};
