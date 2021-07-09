/****
 
  Example runing this code.

  - node quiz3.js ${hexes}.... 
  
  for example 
  - node quiz3.js 48 65 6C 6C 6F 20 77 6F 72 6C 64 21

  // console.log(solution(['48','65','6C','6C','6F','20','77','6F','72','6C','64','21'])) === Hello world!


****/ 



const isHex = h => parseInt(h,16).toString(16) === h.toLowerCase()

const hex2Char = h => Buffer.from(h, 'hex').toString() 

const solution = hexes => {
  return hexes.reduce((acc, curr) => acc.concat(hex2Char(curr)),'') 
}

if(process.argv.length < 3)
  throw new Error('Please fill input !!!');

const inputs = process.argv.slice(2);

if(!inputs.every(hex => isHex(hex))) 
  throw new Error(`There're some input isn't a hex`);

console.log(solution(inputs))


 