const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/enactusDB", { useNewUrlParser: true, useUnifiedTopology: true });

const productSchema = new mongoose.Schema({
  nameStr: String,
  name: String,
  imageURL: String,
  price: String
});
const Product = mongoose.model("product", productSchema);

// var basket = new Product({
//   nameStr: "basket",
//   name: "images/u23661-4.png?crc=4022233970",
//   imageURL: "images/1010.jpg",
//   price: "images/u21101-4.png"
// });
// basket.save();

// var cardboardChair = new Product({
//   nameStr: "chair",
//   name: "images/u22996-43.png?crc=4022233970",
//   imageURL: "images/88.jpg",
//   price: "images/u21101-4.png"
// });
// cardboardChair.save();

// var shelf = new Product({
//   nameStr: "shelf",
//   name: "images/u22916-43.png?crc=4022233970",
//   imageURL: "images/77.jpg",
//   price:"images/u21101-4.png"
// });
// shelf.save();

// var clock = new Product({
//   nameStr: "clock",
//   name: "images/u22576-43.png?crc=4022233970",
//   imageURL: "images/66.jpg",
//   price:"images/u22577-43.png"
// });
// clock.save();
//
// var coaster = new Product({
//   nameStr: "coaster",
//   name: "images/u24313-43.png?crc=4022233970",
//   imageURL: "images/1212.jpg",
//   price:"images/u22577-43.png"
// });
// coaster.save();

// var frame = new Product({
//   nameStr: "frame",
//   name: "images/u21584-43.png?crc=4022233970",
//   imageURL: "images/22.jpg",
//   price:"images/u21587-4.png"
// });
// frame.save();
//
// var lightUnit = new Product({
//   nameStr: "light-unit",
//   name: "images/u15494-4.png?crc=4022233970",
//   imageURL: "images/11.jpg",
//   price:"images/u21101-4.png"
// });
// lightUnit.save();
//
// var pencilOrder = new Product({
//   nameStr: "pencil-order",
//   name: "images/u21720-43.png?crc=4022233970",
//   imageURL: "images/33.jpg",
//   price:"images/u21722-43.png"
// });
// pencilOrder.save();
//
// var plasticPot = new Product({
//   nameStr: "plastic-pot",
//   name: "images/u24077-43.png?crc=4022233970",
//   imageURL: "images/1111.jpg",
//   price:"images/u21722-43.png"
// });
// plasticPot.save();
//
// var plasticRug = new Product({
//   nameStr: "plastic-rug",
//   name: "images/u23537-4.png?crc=4022233970",
//   imageURL: "images/99.jpg",
//   price:"images/u21722-43.png"
// });
// plasticRug.save();

// var tireChairKettan = new Product({
//   nameStr: "tire-chair-kettan",
//   name: "images/u22296-43.png?crc=4022233970",
//   imageURL: "images/55.jpg",
//   price:"images/u22298-43.png"
// });
// tireChairKettan.save();
//
// var tireChairPainted = new Product({
//   nameStr: "tire-chair-painted",
//   name: "images/u22141-43.png?crc=4022233970",
//   imageURL: "images/44.jpg",
//   price:"images/u22137-4.png"
// });
// tireChairPainted.save();

app.get("/", function (req, res) {
  res.render(__dirname + "/views/home.ejs",
  {

  });
});

app.get("/products", function (req, res) {
  res.render(__dirname + "/views/products.ejs",
  {

  });
});

app.get("/product/:name", function (req, res) {
  Product.find({ nameStr: req.params.name }, function(err, product) {

    res.render(__dirname + "/views/product.ejs",
    {
      nameStr: product[0].nameStr,
      name: product[0].name,
      imageURL: product[0].imageURL,
      price: product[0].price
    });
  });
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
