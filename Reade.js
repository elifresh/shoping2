const fs=require('fs');
function readeFn(){
    reade=JSON.parse( fs.readFileSync('./Cart.json','utf-8'));
    console.log(reade);
    return reade;
}
module.exports=readeFn;