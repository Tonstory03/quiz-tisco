/****
 
  Example runing this code.

  - node quiz1.js ${inputA} ${inputB}
  
  for example 
  - node quiz1.js 9876543 3467985

  // console.log(solution(9876543, 3467985)) === 'Valid'
  // console.log(solution(9876543, 7865439)) === 'Invalid'
  // console.log(solution(9876543, 8743956)) === 'Valid'
  // console.log(solution(9876543, 3456789)) === 'Invalid'

****/ 
const transformInput = (input) => {
  if(typeof input === 'number' || !isNaN(input)) return `${input}`;
  if(typeof input === 'string') {
    const transformStr = input.split(' ')
      .reduce((acc, curr) => {
        return acc + curr;
      }, '')
    if(!isNaN(transformStr))
      return transformStr;
  }
  throw new Error(`Input ${input} is invalid type.`);
}

const compare2String = (numberCheckes, idxChecks) => {
  for(const [idx, charCompare] of Object.entries(numberCheckes[idxChecks[1]])){
    if(charCompare === numberCheckes[idxChecks[0]][idx])  return 'Invalid';
  }
  return 'Valid';
}

const solution = (inputA, inputB) => {
    const numberAChecked = transformInput(inputA);
    const numberBChecked = transformInput(inputB);
    const idxChecks = numberAChecked > numberBChecked  ? [0, 1]: [1, 0];
    return compare2String([numberAChecked, numberBChecked], idxChecks)
}

if(process.argv.length < 4)
  throw new Error('Please fill input !!!');

console.log(solution(process.argv[2], process.argv[3]))

