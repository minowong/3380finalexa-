const router = require('express').Router();
const BookModel = require('../models/book.model')

router.route('/')
    .get((req, res) => {
        BookModel.find()
            .then((books) => res.json(books))
            .catch((err) => res.status(400).json('error:' + err))
    })
    .post((req, res) => {
        BookModel.create({
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            pages: req.body.pages
        })
            .then((book) => {
                res.json("new book added");
                console.log("new book added: " + book.data);
            })
            .catch((err) => res.status(400).json('error:' + err))

    });

router.route('/:id')
    .get(async (req, res) => {
        await BookModel.findById(req.params.id)
            .then((book) => {
                if(book!=null){
                    res.json(book);     
                } else {
                    res.status(404).json("Book Not Found")
                }
                console.log("find book id: " + req.params.id);
            })
            .catch((err) => {
                res.status(400).json("error" + err);
                console.error("error: ", err.message);
            })
    })
    .post(async (req, res) => {
        await BookModel.findByIdAndUpdate(req.params.id)
            .then((neweBook) => {
                neweBook.title = req.body.title,
                neweBook.author =req.body.author,
                neweBook.updateBook = req.body.description,
                neweBook.pages =  req.body.pages
                 
                neweBook.save()
                    .then(() => res.json("book updated"))
                    .catch((err) => res.status(400).json("error: " + err))
            })
            .catch((err) => {
                res.status(400).json("error" + err);
                console.error("error: ", err.message);
            })
    })
    .delete(async (req, res) => {
        await BookModel.findByIdAndDelete(req.params.id)
            .then(() => {
                res.json("book deleted");
                console.log("deleted id: " + req.params.id);
            })
            .catch((err) => {
                res.status(400).json("error" + err);
                console.error("error: ", err.message)
            })
    })

module.exports = router;