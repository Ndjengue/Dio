//extract method
async function permittedCharacters(){
    let permitted = [];
        if(process.env.UPPERCASE_LETTERS =="true"){
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"); //...spred operator, serve para não substituir o que está lá dentro
    }
    
    if(process.env.LOWERCASE_LETTERS =="true"){
        permitted.push(..."abcdefghijklmnopqrstuvwxyz");
    }
    if(process.env.NUMBERS =="true"){
        permitted.push(..."123456789");
    }

    if(process.env.SPECIAL_LETTERS =="true"){
        permitted.push(..."!@#$%^&*()-_");
    }

  


    return permitted;
}

export default permittedCharacters;