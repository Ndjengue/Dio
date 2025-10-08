const player1 = {
    "NOME":"Esteves Junior",
    "VELOCIDADE":5,
    "MANOBRABILIDADE":4,
    "PODER":4,
    "PONTOS":0
};

const player2 = {
    "NOME":"Felipe Aguiar",
    "VELOCIDADE":3,
    "MANOBRABILIDADE":3,
    "PODER":4,
    "PONTOS":7
};

async function rollDice(){
    return Math.floor(Math.random()*6)+1;
}

async function rollHullBomb(){
    
    let random = Math.random();
   
    return random >=0.50 ? "Casco" : "Bomba";
}


async function getRandomHullBomb(character1,character2){
     let diceHullBomb1 = await rollHullBomb();
     let diceHullBomb2 = await rollHullBomb();

    
     console.log(`${character2.NOME} 🎲 rolou um dado de ${diceHullBomb2}`);

     if(diceHullBomb1 === "Casco" && character1.PONTOS>0){
        character1.PONTOS -=1;
         console.log(`${character1.NOME} 🎲 rolou um dado de ${diceHullBomb1} -1 ponto 🐢 `);
     } else if(diceHullBomb1 === "Bomba" && character1.PONTOS>=2){
        character1.PONTOS -=2;
        console.log(`${character1.NOME} 🎲 rolou um dado de ${diceHullBomb1} -2 ponto 🐢 `);
     }
     
      if(diceHullBomb2 === "Casco" && character2.PONTOS>0){
        character2.PONTOS -=1;
        console.log(`${character2.NOME} 🎲 rolou um dado de ${diceHullBomb2} -1 ponto 🐢`);
     } else if(diceHullBomb2 === "Bomba" && character2.PONTOS>=2){
        character2.PONTOS -=2;
        console.log(`${character2.NOME} 🎲 rolou um dado de ${diceHullBomb2} -2 ponto 🐢`);
     }

    
}

async function getRandomBlock(){
    let random = Math.random();
    let result;

    switch (true) {
        
        case random <0.36:
            result = "RECTA";            
            break;

        case random <=0.67:
            result = "CURVA";
            break;
        default:
            result = "CONFRONTO";
            break;
    }
    return result;
}

//criamos essa função para evitar repetições
async function logRollResult(characterName,block,diceResult,attribute){
     console.log(`${characterName} 🎲 rolou um dado de ${block}  ${diceResult} + ${attribute} = ${diceResult+attribute}`);
}


async function playRaceEngine(character1,character2){
    
    for (let round = 1; round <=6; round++) {

        console.log(`🏁Roda ${round}\n`);

        //Sorteio do Bloco/Pista
        let block = await getRandomBlock();
        console.log(`🏁 Bloco ${block} \n`);

        //Rolar dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();
    

        //testes skill
        let totalTestSkil1 =0;
        let totalTestSkil2 =0;

        if(block=="RECTA"){
            
            totalTestSkil1 = character1.VELOCIDADE + diceResult1;
            totalTestSkil2 = character2.VELOCIDADE + diceResult2;


            await logRollResult(character1.NOME,"Velocidade",diceResult1,character1.VELOCIDADE);
            await logRollResult(character2.NOME,"Velocidade",diceResult1,character2.VELOCIDADE);
        }

         if(block=="CURVA"){
            
            totalTestSkil1 = character1.MANOBRABILIDADE + diceResult1;
            totalTestSkil2 = character2.MANOBRABILIDADE + diceResult2;

            

            await logRollResult(character1.NOME,"MANOBRABILIDADE",diceResult1,character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME,"MANOBRABILIDADE",diceResult1,character2.MANOBRABILIDADE);
        }

         if(block=="CONFRONTO"){
            //Escopo de variaveis, acessivel apenas neste bloco

            let powerResult1 = character1.PODER + diceResult1;
            let powerResult2 = character2.PODER + diceResult2;
                
            getRandomHullBomb(character1,character1);
           

            console.log(`${character1.NOME} Confrontou  com o ${character2.NOME}! 🥊🥊`);
            
            await logRollResult(character1.NOME,"Poder",diceResult1,character1.PODER);
            await logRollResult(character2.NOME,"Poder",diceResult2,character2.PODER);

            /*#################################################################################
            if (powerResult1>powerResult2) {
                if (powerResult2>0) {
                    character2.PONTOS--;
                }
                
            }*/
            // operador ternário
            //character2.PONTOS -= powerResult1 >powerResult2 && character2.PONTOS > 0 ? 1 : 0; 

            //ifs combinado
            if(powerResult1>powerResult2 && powerResult2>0){
                console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢`);
              character2.PONTOS--;  
            }
          //#################################################################################


          /*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
            if (powerResult2>powerResult1) {
                if (powerResult1>0) {
                    character1.PONTOS--;
                }
                
            }
           */
           // character1.PONTOS -= powerResult2 > powerResult1 && powerResult1 > 0 ? 1:0;
           if(powerResult2 > powerResult1 && powerResult1 > 0){
                console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢`);
                
              character2.PONTOS--;  
            }

            //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


            if (powerResult1===powerResult2) {
               
            console.log("Confronto empatado! Nenhum ponto foi perdido.");
                  
            }
        // console.log( powerResult1===powerResult2 ? "Confronto empatado! Nenhum ponto foi perdido." : "");
        }

        

        

        //Verificando Vencedor
        if (totalTestSkil1>totalTestSkil2){

                console.log(`O ${character1.NOME} pontuou 1 ponto!`);
                character1.PONTOS++; 

        } else if (totalTestSkil2>totalTestSkil1){
                    console.log(`O ${character2.NOME} pontuou 1 ponto!`);
                character2.PONTOS++; 
        }
    }
}

async function declareWinner(character1,character2){
    console.log("Resultado final:");
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

    if(character1.PONTOS > character2.PONTOS){
      
        console.log(`\n${character1.NOME} venceu a corida! Parabéns!🏆🎉🎊🏆`);
    
    }else if(character2.PONTOS > character1.PONTOS){
         console.log(`\n${character2.NOME} venceu a corida! Parabéns!🏆🎉🎊🏆`);
    }else{
        console.log(`A Corrida terminou em empate. venceu a corida! Parabéns!`); 
    }
}


//"Funcao auto invocavel"
(async function main(){
    console.log(
        `🏁🚨 Corrida entre o ${player1.NOME} e ${player2.NOME} começando...\n
        `);

        await playRaceEngine(player1,player2); //irá aguardar para terminar executar este sem avançar para o proximo passo.
        await declareWinner(player1,player2);
})()

