import chalk from 'chalk';

const first = Math.floor(Math.random() * 100);
const second = Math.floor(Math.random() * 100);

const result = first + second;

console.log(chalk.yellow(`Сумма чисел ${first} и ${second} равна ${result}`));
