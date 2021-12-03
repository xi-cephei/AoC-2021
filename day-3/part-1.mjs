import { input } from './input.mjs';

const stringLength = 12;

const rates = {
  gamma: 0,
  epsilon: 0
};

const bitsPerPosition = Array.from(Array(stringLength)).map(() => new Array());

for (const line of input) {
  for (const [index, bit] of line.split('').entries()) {
    bitsPerPosition[index].push(bit);
  }
}

rates.gamma = bitsPerPosition
  .map(position => position.filter(v => v === '1').length > position.filter(v => v === '0').length ? '1' : '0')
  .join('');

rates.epsilon = rates.gamma
  .split('')
  .map(v => v === '1' ? '0' : '1')
  .join('');

// Result
console.log(parseInt(rates.gamma, 2) * parseInt(rates.epsilon, 2));
