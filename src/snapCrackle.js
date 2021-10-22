// Seu código vai aqui
function snapCrackle(maxValue){
    let retorno = ""
    for (let index = 1; index <= maxValue; index++){
       const impar = index % 2 != 0
       const multipli5 = index % 5 == 0
       // const primo = index % 1 === 0 && index % index === 0
       if (impar && !multipli5)
         retorno = retorno + "Snap, "
      if (multipli5 && !impar)
         retorno = retorno + "Crackle, "
      if (impar && multipli5)
         retorno = retorno + "SnapCrackle, "
      if (!impar && !multipli5)
         retorno = retorno + index + ", " 
    }
    console.log(retorno)
  }
  snapCrackle(12)
  
  function snapCracklePrime(maxValue){
    let retorno = ""
    
    function isPrime (num) {
    for (let position = 2; position < num; position++)
      if (num % position === 0) {
        return false
      }
    return num > 1
    }
    
    for (let index = 1; index <= maxValue; index++){
       const impar = index % 2 != 0
       const multipli5 = index % 5 == 0
       const primo = isPrime(index) 
     
       if (impar && !multipli5)
         retorno = retorno + "Snap"
       if (multipli5 && !impar)
         retorno = retorno + "Crackle"
       if (impar && multipli5)
         retorno = retorno + "SnapCrackle"
       if (primo)
         retorno = retorno + "Prime"
       if (!impar && !multipli5 && !primo)
         retorno = retorno + index 
       retorno = retorno + ", " 
    }
    console.log(retorno)
  }
  snapCracklePrime(15)