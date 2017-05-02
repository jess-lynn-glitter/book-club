

angular.module('BookApp', [])
	.controller('BooksController', BooksController);

BooksController.$inject = ['$http', '$scope'];
console.log("controller working?");

function BooksController($http, $scope){
	console.log('is this happening');
	var self = this;
	self.all = [];
	self.getBooks = getBooks;
	self.addBook = addBook;
	self.newBook = {};



function addBook(){
    $http
      .post('http://localhost:3000/api/books', self.newBook)
      .then(function(response){
        getBooks();
    });
    self.newBook = {};
  }



randomBooks();
function randomBooks(){
		$http
		.get('http://localhost:3000/api/books')
		.then(function(response){
			console.log('randomize books' + response.data);
			$scope.obj = (response.data);
			//generic shuffle function
			$scope.shuffle = function (o){
				for( var j, x, i = o.length; i; j = Math.floor(Math.random()*i), x = o[--i], o[i] = o[j], o[j] = x);
				return o;
			};
		});
}

getBooks();

function getBooks(){
	$http
		.get('http://localhost:3000/api/books')
		.then(function(response){
			console.log('getting all books');
			console.log(response.data);
			self.all= (response.data);
		});
}
}