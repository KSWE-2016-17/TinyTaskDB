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
    assignedTo: {type: String, ref: 'User'},
    task: {type: Schema.Types.ObjectId, ref: 'Task'},
    isExecutor: Boolean,
    value: Boolean,
    comment: String,
});

var applicationSchema = Schema({
    user: {type: String, ref: 'User'},
    task: {type: Schema.Types.ObjectId, ref: 'Task'},
    comment: String,
});

var taskSchema = Schema({
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

module.exports = {
    Task: mongoose.model('Task', taskSchema),
    User: mongoose.model('User', userSchema),
    Application: mongoose.model('Application', applicationSchema),
    Rating: mongoose.model('Rating', ratingSchema),
};
