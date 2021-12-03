import { input } from './input.mjs';

const position = {
  horizontal: 0,
  vertical: 0
};

for (const step of input) {
  let [direction, amount] = step.split(' ');
  amount = Number(amount);

  switch (direction) {
    case 'forward':
      position.horizontal += amount;
      break;
    case 'up':
      position.vertical -= amount;
      break;
    case 'down':
      position.vertical += amount;
      break;
  }
}

// Result
console.log(position.horizontal * position.vertical);
