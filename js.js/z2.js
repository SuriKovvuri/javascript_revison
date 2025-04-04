import { add, mul } from './z1.js'

console.log(add(4,5))

console.log(mul(4,5))



import { addition, sub } from './z1.js';

console.log({ addition, sub });

addition(5, 3); // Outputs: 8
sub(5, 3); // Outputs: 2



// "type": "commonjs"

// (async () => {
//     const imported = await import('./z1.js');

//     // Now you can access the exported functions like CommonJS
//     const { add, sub } = imported;

//     console.log({ add, sub });

//     add(5, 3); // Outputs: 8
//     sub(5, 3); // Outputs: 2
// })();
