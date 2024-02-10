const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    tableNo: { 
        type: String, 
        required: true, 
    },
    availablity: { 
        type: Boolean,
        default: true,
        required: true
    },
    seatCount: { 
        type: Number,
        required: true
    },
}, {
    timestamps: true
});

const Table = mongoose.model('Table', tableSchema);
module.exports = Table;
