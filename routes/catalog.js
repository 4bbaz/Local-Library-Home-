const express = require('express');
const router = express.Router();



const book_controller = require("../controllers/bookController");
const author_controller = require("../controllers/authorController");
const bookinstance_controller = require('../controllers/bookInstanceController')
const genreController = require('../controllers/genreController');


router.get('/author/create', author_controller.author_create_get);
router.post('/author/create', author_controller.author_create_post);


router.get('/genre/create', genreController.genre_create_get);
router.post("/genre/create", genreController.genre_create_post);

router.get('/book/create', book_controller.book_create_get);
router.post('/book/create', book_controller.book_create_post);

router.get('/bookinstance/create', bookinstance_controller.bookinstance_create_get);
router.post('/bookinstance/create', bookinstance_controller.bookinstance_create_post);


router.get("/author/:id/delete", author_controller.author_delete_get);
router.post("/author/:id/delete", author_controller.author_delete_post);

// GET request to update BOok.
router.get("/book/:id/update", book_controller.book_update_get);
router.post("/book/:id/update", book_controller.book_update_post);

router.get("/book/:id/delete", book_controller.book_delete_get);
router.post("/book/:id/delete", book_controller.book_delete_post);

// GET request to delete BookInstance.
router.get(
    "/bookinstance/:id/delete",
    bookinstance_controller.bookinstance_delete_get
);

// POST request to delete BookInstance.
router.post(
    "/bookinstance/:id/delete",
    bookinstance_controller.bookinstance_delete_post
);

router.get(
    "/bookinstance/:id/update",
    bookinstance_controller.bookinstance_update_get
);

// POST request to update BookInstance.
router.post(
    "/bookinstance/:id/update",
    bookinstance_controller.bookinstance_update_post
);

router.get("/genre/:id/delete", genreController.genre_delete_get);

// POST request to delete Genre.
router.post("/genre/:id/delete", genreController.genre_delete_post);

// GET request to update Genre.
router.get("/genre/:id/update", genreController.genre_update_get);

// POST request to update Genre.
router.post("/genre/:id/update", genreController.genre_update_post);

router.get("/", book_controller.index);
router.get('/books', book_controller.book_list);
router.get('/authors', author_controller.author_list);
router.get('/bookinstances', bookinstance_controller.bookinstance_list);
router.get('/genres', genreController.genre_list);

router.get('/book/:id', book_controller.book_details);
router.get('/author/:id', author_controller.author_details);
router.get('/bookinstance/:id', bookinstance_controller.bookinstance_details);
router.get('/genre/:id', genreController.genre_detail);



module.exports = router;



