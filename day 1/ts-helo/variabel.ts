let count: number | string;
count = 'a';
count = 3;
// count = "w";
count = 3.5;

let x = 3.78;
// x = 'a';

let a = '123';
let c = (count as unknown as string).endsWith('3');
console.log(c);