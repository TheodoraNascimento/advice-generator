const adviceNumber = document.querySelector(".advice-number")
const advice = document.querySelector(".advice")
const adviceUpdate = document.querySelector(".advice-update")


// async function adviceGenerador(){
//    try{
//     const url = 'https://api.adviceslip.com/advice'
//     const response = await fetch(url);
//     const generate = await response.json();

//     if (!response.ok){
//               throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
//     }

//     const newAdvice = await generate.slip.advice;
//     const newId = await generate.slip.id;
//     adviceNumber.innerText = `# ${newId}`;
//     advice.innerText = `"${newAdvice}"`;

//    }catch(error){
//     console.log(error);
//    }
// }


// adviceUpdate.addEventListener('click', adviceGenerador);

// adviceGenerador()

// OR

adviceUpdate.addEventListener('click', async () => {
    try{
        const url = 'https://api.adviceslip.com/advice'
        const response = await fetch(url);
        const generate = await response.json();
    
        if (!response.ok){
                  throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
        }
    
        const newAdvice = await generate.slip.advice;
        const newId = await generate.slip.id;
        adviceNumber.innerText = `# ${newId}`;
        advice.innerText = `"${newAdvice}"`;
    
       }catch(error){
        console.log(error);
       }
});
