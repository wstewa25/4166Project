const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const connectionSchema = new Schema({
    name: { type: String, required: [true, 'Connection Name is Required.'] },
    category: { type: String, required: [true, 'Connection Category is Required.'] },
    details: { type: String, required: [true, 'Connection Details are Required.'], minLength: [10, 'Details should have at least 10 characters'] },
    date: { type: String, required: [true, 'Connection Date is Required.'] },
    start_time: { type: String, required: [true, 'Connection start time is Required.'] },
    end_time: { type: Schema.Types.ObjectId, ref: 'User' },
    host_name: { type: String, required: [true, 'Connection host is Required.'] },
    image: { type: String, required: [true, 'Connection image link is Required.'] },
    location: { type: String, required: [true, 'Connection location is Required.'] },
});

module.exports = mongoose.model('Connection', connectionSchema);