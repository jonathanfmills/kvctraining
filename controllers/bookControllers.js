

var bookControllers = function(Book){


	var find = function (req, res) {
		var query = {};
		if(req.query.author)
			query.author = req.query.author;
		//console.log(query)
		Book.find(query, function(err, books){
			if(err){
				res.send(404);
			}
			else{
				res.json(books);
			}
		});
	}

	var add = function(req,res) {
		var book = new Book(req.body);
		console.log(req.body);
		book.save(function(err){
			res.json(book);
		})
	}

	var edit = function(req,res) {
		req.book.title = req.body.title;
		req.book.author = req.body.author;
		req.book.genre = req.body.genre;
		req.book.read = req.body.read;
		req.book.save(function(err){
			res.json(req.book);
		})
	}

	return{
		find: find,
		add: add,
		edit: edit
	}

}

module.exports = bookControllers