const fs = require('fs');
const path = require('path')

const rootDir = require("../utils/path");
const p = path.join(rootDir,'data','neoItem.json');

const getProductsFromFile = (callback) => {
    fs.readFile(p,(err,fileContent) => {
        if(err){
          return callback(err,[]);
        }
        callback(err,JSON.parse(fileContent));
    });
}

module.exports = class NeoItem {
    constructor(id,heading,price,headline,description,imageUrl) {
        this.id = id;
        this.heading = heading;
        this.price = price;
        this.headline = headline;
        this.description = description;
        this.imageUrl = imageUrl; 
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