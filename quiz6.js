
/****
 
  Example runing this code.

  - node quiz6.js ${number} 
  
  for example 
  - node quiz6.js 5

  // console.log(solution(5)) === '5 16 8 4 2 1' 
 

****/ 


const processEven = number => number / 2;

const processOdd = number =>  number * 3 + 1;


const proceses = [processEven, processOdd];

const solution = number => { 
  if(number === 1) return '1';
  const results = [`${number}`];
  let count = 1, lastIdx = 0;
  while(number > 1){
    number = proceses[number % 2](number);
    if(count % 10 === 0) { 
      count = 0;
      results[++lastIdx] = '';
    }
    results[lastIdx] += ` ${number}`;
    count++;
  }
  return results.join('');
}

if(process.argv.length < 3)
  throw new Error('Please fill input !!!');
  
console.log(solution(Number.parseInt(process.argv[2])))