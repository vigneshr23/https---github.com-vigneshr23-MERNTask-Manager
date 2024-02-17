const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    // task: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
});

module.exports = mongoose.model('Task', taskSchema);
