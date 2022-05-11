const fs=require('fs');

function updateArr(product,chengeProduct){
    const card=JSON.parse(fs.readFileSync('./Cart.json','utf-8'));

    for (let i = 0; i< card.length; i++) {
        if(product === card[i]){  
            card[i]=chengeProduct;
            fs.writeFileSync('./Cart.json',JSON.stringify(card));
            break;
        }
    }
    if(!(product in card)){
        console.log(`"your arr" ${product} "is not in buffer"`);
    }        
}    
module.exports=updateArr;