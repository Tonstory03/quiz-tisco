
/****
 
  Example runing this code.

  - node quiz5.js
  
   you can adding more input to inputs array variables.

****/ 


/**** 
 * 
 * instead of input string we can change input to arrays string 2D. 
 *  for example 
 *[
    [' ',' ', ' ','/','\\'],
    [' ', '/','\\','/',' ',' ','\\'],
    ['/',' ',' ',,' ',' ',,' ',' ','\\']
 *]
 * *****/ 
const inputs = [
`    /\\   
 /\\/  \\
/      \\
`,
/* 
 you can format input like this.
  [
    [' ',' ', ' ','/','\\'],
    [' ', '/','\\','/',' ',' ','\\'],
    ['/',' ',' ',,' ',' ',,' ',' ','\\']
  ]
*/

`     /\\
  /\\/  \\  /\\
 /      \\/  \\/\\
/              \\
`,
`                  /\\
       /\\        /  \\  /\\            /\\
  /\\  /  \\      /    \\/  \\  /\\      /  \\
 /  \\/    \\  /\\/          \\/  \\    /    \\
/          \\/                  \\/\\/      \\
`,
  


]


const count = (str) => {
  const re = /\/\\/g
  return ((str || '').match(re) || []).length
}
const solution = wave => {
  const splitLine = typeof wave === 'string' ? wave.split('\n'): wave;
  return splitLine.reduce((acc, line) => acc + count(line), 0)
}
 



for(let input of inputs) {
  let echoInput = input;
  if(typeof input != 'string'){
    input = input.map(lines => lines.join(''));
    echoInput = input.join('\n');
  }  
  console.log(`Input :\n ${echoInput}`);
  console.log(`Output: ${solution(input)}`)
}