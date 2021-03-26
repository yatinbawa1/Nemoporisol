const NeoItem = require("../models/neoItem");
const Product = require("../models/product");

exports.getIndexPage = (_, res) => {
  NeoItem.fetchAll((products) => {
    res.render("shop/index", {
      pageTitle: "index",
      path: "/",
      neoItems: products,
    });
  });
};

exports.getProductDetailPage = (req, res) => {
  const productId = req.params.productId;
  res.render("shop/product-detail", {
    productId: productId,
  });
};

exports.getProductListPage = (_, res) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      products: products,
      path: "/product-list",
    });
  });
};

exports.getCheckoutPage = (req, res) => {
  res.render("shop/checkout");
};

exports.getCartPage = (req, res) => {
  res.render("shop/cart");
};
