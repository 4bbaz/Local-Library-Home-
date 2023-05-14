const Author = require('../models/author');
const Book = require('../models/book');
const asyncHandler = require('express-async-handler');


//Display list of all Authors.
exports.author_list = asyncHandler(async (req, res, next) => {
    const allAuthors = await Author.find().sort({ family_name: 1 }).exec();
    console.log(allAuthors.first_name);
    res.render("authorlist", {
        title: "Author List",
        author_list: allAuthors
    })

    // res.json(allAuthors.name);
});

exports.author_details = asyncHandler(async (req, res, next) => {
    const [book, authorDetails] = await Promise.all([
        Book.find({ author: req.params.id }).exec(),
        Author.findById(req.params.id).exec()
    ])

    res.render("author_details", {
        author_books: book,
        author: authorDetails
    })
}) 