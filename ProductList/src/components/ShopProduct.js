function ShopProduct(title, price) {
	this.title = title;
	this.price = price;
}

ShopProduct.prototype.getTitle = function() {return this.title}
ShopProduct.prototype.setTitle = function(arg) {return this.title = arg}
ShopProduct.prototype.getPrice = function() {return this.price}
ShopProduct.prototype.setPrice = function(arg) {return this.price = arg}
ShopProduct.prototype.getInfo = function() {return `${this.title}, ${this.price}`}

export default ShopProduct;
