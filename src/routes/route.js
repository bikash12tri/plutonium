// const express = require('express');
// const router = express.Router();
// const bookController= require("../controller/myBookController")
// const AuthorModel= require("../controller/Author")



// router.post("/AuthorCreate",AuthorModel.AuthorCreate)
// router.post("/createBook", bookController.createBook  )

// router.get("/bookList", bookController.booksList)

// router.post("/getBooksInYear/:year", bookController.getBooksInYear)

// router.post("/getParticularBooks", bookController.getParticularBooks)

// router.get("/getXINRBooks", bookController.getXINRBooks)

// router.get("/getRandomBooks", bookController.getRandomBooks)

const express = require('express');
const router = express.Router();
const AuthorController= require("../controllers/AuthorController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", AuthorController.createBook)
router.post("/createAuthor", AuthorController.createAuthor)
router.get("/getBooks", AuthorController.getBooks)
router.get("/authorName", AuthorController.authorName)
router.get("/findBookswithAuthor", AuthorController.findBooksWithAuthor)


 module.exports = router;