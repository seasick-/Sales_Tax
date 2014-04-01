module.exports = function (){
  'use strict';

	var books=[];

  function addBook(book) {
		books.push({
			name:book.name,
			price:book.price,
			tax: 0
		});
		return book;
  }
  
  function getBooks() {return books;}

	function getTotalTax() {
		var total=0;
		for (var each in books){
			total+=books[each].tax;
		}
		return total;
	}

  return {
    addBook: function(book){
      return addBook(book);
    },
    getBooks: function() {
    	return getBooks();
    },
    getTotalTax: function() {
    	return getTotalTax();
    }
  };

};