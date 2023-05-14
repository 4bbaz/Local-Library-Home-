const Book = require("../models/book");
const Author = require("../models/author");
const Genre = require("../models/genre");
const BookInstance = require("../models/bookinstance");
const asyncHandler = require('express-async-handler');
const book = require("../models/book");
const bookinstance = require("../models/bookinstance");

exports.index = asyncHandler(async (req, res, next) => {
    const [
        numBooks,
        numBookInstances,
        numAvailableBookInstances,
        numAuthors,
        numGenres,
    ] = await Promise.all([
        Book.countDocuments({}).exec(),
        BookInstance.countDocuments({}).exec(),
        BookInstance.countDocuments({ status: "Available" }).exec(),
        Author.countDocuments({}).exec(),
        Genre.countDocuments({}).exec(),
    ]);

    res.render("index", {
        title: "Local Library Home",
        book_count: numBooks,
        book_instance_count: numBookInstances,
        book_instance_available_count: numAvailableBookInstances,
        author_count: numAuthors,
        genre_count: numGenres,
    });
});

exports.book_list = asyncHandler(async (req, res, next) => {
    const allBooks = await Book.find({}, "title author")
        .sort({ title: 1 })
        .populate("author")
        .exec();


    res.render("book_list", { title: "Book List", booklist: allBooks });

    // allBooks.map((data, idx) => {
    //     res.json(data.title)
    // })


    // allBooks.forEach((book) => {
    //     console.log(book)
    // })

    // let titles = allBooks.map((item) => {
    //     const title = item.title
    //     return title;
    // });

    // res.json(titles)

});

exports.book_details = asyncHandler(async (req, res, next) => {
    const book = await Book.findById(req.params.id).populate("author").populate("genre").exec();
    const bookinstances = await BookInstance.find({ book: req.params.id }).exec()

    if (book === null) {
        const err = new Error("Book Not found");
        err.status = 404;
        return next(err);
    }

    // res.json(book);
    // res.json(bookinstances);

    res.render("book_details", {
        title: book.title,
        book: book,
        book_instances: bookinstances
    })
})

