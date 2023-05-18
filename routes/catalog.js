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



