import ShopProduct from './ShopProduct';

function CDProduct(title, price, playLength){
	ShopProduct.apply(this, arguments);
	this.playLength = playLength;
}

CDProduct.prototype = Object.create(ShopProduct.prototype);
CDProduct.prototype.constructor = CDProduct;

CDProduct.prototype.getPlayLength = function() {
	console.log('getPlayLength');
	return this.playLength;
}

export default CDProduct;
