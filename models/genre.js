const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = Schema({
    name: { type: String, required: true }
});

genreSchema.virtual("url").get(function () {
    return `/catalog/genre/${this.id}`;
});

module.exports = mongoose.model("Genre", genreSchema);