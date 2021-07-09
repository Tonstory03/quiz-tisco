
/****
 
  Example runing this code.

  - node quiz7.js ${numBlock} ${text}....
  
  for example 
  - node quiz7.js 3 Is text important ?

  // console.log(solution(3, Is text important ?)) === 'Ittmrn? se pttx  xioa x' 
 

****/ 


const solution = (numBlock, text) => {
  const modLength = text.length % numBlock;
  const idxFillX = modLength === 0 ? numBlock : modLength;
  const result = text.split('')
   .reduce((acc, curr, idx) => {
     acc[idx % numBlock] += curr;
     return acc;
   }, new Array(numBlock).fill(''))
 
  for(let i=idxFillX; i < numBlock; i++){
    result[i] += 'x';
  }
  return result.join(' ');
 }
 
 if(process.argv.length < 4)
   throw new Error('Please fill input !!!');
 console.log(solution(Number.parseInt(process.argv[2]), process.argv.slice(3).join(' ')))