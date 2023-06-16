const randomNumber = () => {

    return Math.floor(Math.random() * 100) + 1;
};

const adivinaNumero = (userNum, randomNum) => {

    if (randomNum===userNum){
    
         console.log('Adivinaste el numero!');
      }else if (userNum>randomNum){
    
            console.log('Te pasaste!, intentalo de nuevo');           
     }else{

            console.log('Muy bajo!, es un numero mas alto, intenta otra vez');
    }
};

module.exports = {

    randomNumber,
    adivinaNumero
};