
var express = require('express');
	
var routes = function(Book){
	var router = express.Router();

	var book = require('../controllers/bookControllers')(Book);

	router.route('/book')
		.get(book.find)
		.post(book.add);



	router.use('/book/:bookId', function(req,res,next){
		Book.findById(req.params.bookId, function(err, book){
			if(err || !book)
			{
				console.log(err);
				res.send(404);
			}
			else
			{
				req.book = book;
				next();
			}
		});
	});



router.route('/book/:bookId')
	.get(function (req, res) {
		res.json(req.book);
	})
	.put(book.edit)
	.delete(book.delete);
	return router;
}


module.exports = routes;