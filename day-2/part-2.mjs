import { input } from './input.mjs';

const position = {
  horizontal: 0,
  vertical: 0,
  aim: 0
};

for (let i = 0, len = input.length; i < len; i++) {
  let [direction, amount] = input[i].split(' ');
  amount = Number(amount);

  switch (direction) {
    case 'forward':
      position.vertical += amount * position.aim;
      position.horizontal += amount;
      break;
    case 'up':
      position.aim -= amount;
      break;
    case 'down':
      position.aim += amount;
      break;
  }
}

// Result
console.log(position.horizontal * position.vertical);
