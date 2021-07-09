/****
 
  Example runing this code.

  - node quiz4.js ${numbers}.... 
  
  for example 
  - node quiz4.js 1 1

  // console.log(solution([1,1])) === 2 
  // console.log(solution([6,4,8,31,7,5,9])) === 35 
  // console.log(solution([1,2])) === 3 
  // console.log(solution([40,51,72,8])) === 80 
  // console.log(solution([33,30,31,22,4,45,46,67,66])) === 71

****/ 


const solution = numbers => { 
  return numbers
  .reduce(
    ([minVal, maxVal], curr) => ([Math.min(curr, minVal), Math.max(curr, maxVal)]),
    [ Number.MAX_VALUE, Number.MIN_VALUE]
  )
  .reduce((acc, curr) => acc + curr , 0)
}

if(process.argv.length < 3)
  throw new Error('Please fill input !!!');

console.log(solution(process.argv.slice(2).map(v => Number.parseInt(v)) ))