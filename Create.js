const fs=require('fs');
const { stringify } = require('querystring');
 function createProduct(product){
    const card=JSON.parse(fs.readFileSync('./Cart.json','utf-8'));
    const arr=[
        ...card,
        ...product
    ]
    fs.writeFileSync('./Cart.json',JSON.stringify(arr));
    // return arr;
 }
 module.exports=createProduct;