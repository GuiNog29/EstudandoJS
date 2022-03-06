function Product(name, price) {
  this.name = name;
  this.price = price;
}
Product.prototype.increase = function (value) {
  this.price += value;
};
Product.prototype.discount = function (value) {
  this.price -= value;
};

function TShirt(name, price, color) {
  Product.call(this, name, price);
  this.color = color;
}
TShirt.prototype = Object.create(Product.prototype);
TShirt.prototype.constructor = TShirt;

function Mug(name, price, color, material) {
  Product.call(this, name, price);
  this.color = color;
  this.material = material;
}
Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;

const tShirt = new TShirt('Camiseta', 20, 'black');
const mug = new Mug('Mug', 10, 'Black', 'Porcelain');
// tShirt.increase(10);
console.log(tShirt);
console.log(mug);
