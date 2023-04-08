const { Schema, model } = require('mongoose');

const roomSchema = new Schema(
    {
        name: String,
        price: {
            type: Number,
            required: [true, '價格必填'],
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Room = model('Room', roomSchema);

module.exports = Room;
