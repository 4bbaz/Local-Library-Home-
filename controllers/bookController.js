const Book = require("../models/book");
const Author = require("../models/author");
const Genre = require("../models/genre");
const BookInstance = require("../models/bookinstance");
const asyncHandler = require('express-async-handler');


// exports.index = asyncHandler(async (req, res, next) => {
//     const [
//         numBooks,
//         numBookInstances,
//         numAvailableBookInstances,
//         numAuthors,
//         numGenres,
//     ] = await Promise.all([
//         Book.countDocuments({}).exec(),
//         BookInstance.countDocuments({}).exec(),
//         BookInstance.countDocuments({ status: "Available" }).exec(),
//         Author.countDocuments({}).exec(),
//         Genre.countDocuments({}).exec(),
//     ]);

//     res.render("index", {
//         title: "Local Library Home",
//         book_count: numBooks,
//         book_instance_count: numBookInstances,
//         book_instance_available_count: numAvailableBookInstances,
//         author_count: numAuthors,
//         genre_count: numGenres,
//     });
// });

exports.book_list = asyncHandler(async (req, res, next) => {
    const allBooks = await Book.find({}, "title author")
        .sort({ title: 1 })
        .populate("author")
        .exec();
    res.render("book_list", { title: "Book List", booklist: allBooks });

});