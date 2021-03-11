const fs = require('fs');
const path = require('path')

const rootDir = require("../utils/path");
const p = path.join(rootDir,'data','products.json');

const getProductsFromFile = (callback) => {
    fs.readFile(p,(err,fileContent) => {
        if(err){
          return callback(err,[]);
        }
        callback(err,JSON.parse(fileContent));
    });
}

module.exports = class Product { 

    constructor({title,price,imageUrl,uniqueId,desc}) {
        this.title = title;
        this.price = price;
        this.imageUrl = imageUrl;
        this.key = uniqueId;
        this.desc = desc;
    }
    
    save(callback) {    
        let products = [];
        getProductsFromFile((err,prod) => {
            if(!err){
                products = prod;
            }
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err) => {
                console.log(err);
            })
            callback();
        }); 
    }
    static fetchAll(callback) {
        getProductsFromFile((err,products) => {
            if(err) {
                console.log(err);
                callback([]);
            }
            callback(products);    
        });
    }
}