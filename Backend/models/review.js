const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    author:{
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;