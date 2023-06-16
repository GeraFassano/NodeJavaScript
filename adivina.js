const readLineSync = require ('readline-sync')
const {randomNumber, adivinaNumero} = require ('./appf')

const  numeroIn = () => {

    return readLineSync.question('Ingrese un numero porfavor:')
};

const adivinaza = () =>{

    const randomNum = randomNumber();
    let userNum = 0;

    console.log('Adivine al numero del 1 al 100')

    while(userNum !== randomNum){
        userNum = numeroIn();
        adivinaNumero(userNum, randomNum);
    }
};
adivinaza();
