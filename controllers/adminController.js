const Product = require("../models/product");

exports.getAdminPage = (_, res) => {
  res.render("admin/admin", {
    pageTitle: "Admin",
    path: "/admin",
  });
};

exports.getAddProductPage = (_, res) => {
  res.render("admin/add-product", {
    pageTitle: "Add Products",
    path: "/admin/add-product",
  });
};

exports.addNewProduct = (req, res) => {
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
    uniqueId: req.body.key,
    desc: req.body.desc,
  });

  product.save(() => {
    res.redirect("/");
  });
};
