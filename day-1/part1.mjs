import { input } from './input.mjs';

const increased = input.reduce((prev, next, index) => (next > input[index - 1]) ? prev + 1 : prev, 0);

// Result
console.log(increased);
