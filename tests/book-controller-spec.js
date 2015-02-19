var sinon = require('sinon');

describe('book controller', function(){
	it("should return a list of books on find", function(){

		var bookData = [{
			title: 'War and Peace',
			genre: 'Historical Fiction',
			author: 'Lev Nikolayevich Tolstoy',
			read: false
		},
		{
			title: 'Les Misérables',
			genre: 'Historical Fiction',
			author: 'Victor Hugo',
			read: false
		}];
		var req = {query: {}};
		var res = {json: function(){}};
		var Book = {find: 
			function(query,cb){cb(null, bookData)}};

		var resMock = sinon.mock(res);

		resMock.expects('json').once().withExactArgs(bookData);

		var bookController = 
		require('../controllers/bookControllers')(Book);

		bookController.find(req,res);

		resMock.verify();
	});
});