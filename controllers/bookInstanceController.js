const BookInstance = require('../models/bookinstance');
const asyncHandler = require('express-async-handler');


exports.bookinstance_list = asyncHandler(async (req, res, next) => {
    const allBookInstances = await BookInstance.find().populate("book").exec();
    res.render("bookinstances", {
        title: "Book Instance List",
        bookinstance_list: allBookInstances,
    });

    // res.json(allBookInstances)

});

exports.bookinstance_details = asyncHandler(async (req, res, next) => {
    const bookInstanceDetails = await BookInstance.findById(req.params.id).populate('book').exec();
    res.render("bookinstance_details", {
        bookinstance: bookInstanceDetails
    })

})



