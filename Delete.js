const fs=require('fs');

function deleteFn(product){
    const card=JSON.parse(fs.readFileSync('./Cart.json','utf-8'));
    for (let i = 0; i< card.length; i++) {
        if(product === card[i]){  
            delete card[i];
            fs.writeFileSync('./Cart.json',JSON.stringify(card));
            break;
        }
    }
    if(!(product in card)){
        console.log(`"your arr to delete" ${product} "is not in buffer"`);
    }       

}
module.exports=deleteFn;