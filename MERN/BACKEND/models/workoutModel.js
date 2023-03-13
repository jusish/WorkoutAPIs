const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    title: {
        type: 'string',
        required: true,
    },

    reps:{
        type: Number,
        required: true,
    },

    load:{
        type:Number,
        reqired: true,
    }
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)