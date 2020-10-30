import CDProduct from "./components/CDProduct";
import BookProduct from './components/BookProduct';

let cdProd1 = new CDProduct('cd title 1', 10, 3.30);
let cdProd2 = new CDProduct('cd title 2', 20 , 4.00);
let book1 = new BookProduct('book title 2', 100 , 400);
let book2 = new BookProduct('book title 2', 200 , 1000);

console.log(cdProd1.setTitle('new book title'));
console.log(cdProd2.getTitle());
console.log(book1.getInfo());
console.log(book2.getPrice());
console.log(book2.setPrice(1000));
