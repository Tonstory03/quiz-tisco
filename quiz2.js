/****
 
  Example runing this code.

  - node quiz2.js ${number}.... 
  
  for example 
  - node quiz2.js 6


****/ 

const findOutput = (number, sumDivisors) => {
  if(sumDivisors === number) return 'perfect';
  if(sumDivisors > number) return 'abundant';
  return 'deficient';
}


const solution = number => {
  if(number < 1) throw new Error('Input have to greater than 0');
  const sumDivisors = [...new Array(Math.floor(number / 2)).keys()] //.map(v => v + 1)
    .reduce((acc, curr) => {
      if(( number % (curr + 1) === 0)) acc += curr + 1;
      return acc;
    }, 0) 
  return findOutput(number, sumDivisors);
}

if(process.argv.length < 3)
  throw new Error('Please fill input !!!');
  
console.log(solution(Number.parseInt(process.argv[2])))