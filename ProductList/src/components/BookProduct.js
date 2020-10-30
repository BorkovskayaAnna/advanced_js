import ShopProduct from './ShopProduct';

function BookProduct(title, price, numPages) {
	ShopProduct.call(this,title, price);
	this.numPages = numPages;
}
BookProduct.prototype = Object.create(ShopProduct.prototype);
BookProduct.prototype.constructor = BookProduct;

BookProduct.prototype.getNumPages = function() {
	console.log('getNumPages');
	return this.getNumPages;
}

export default BookProduct;
