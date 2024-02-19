'use strict';

{
  function double(a) {
    return console.log(a * 2);

  }
  double(10);
  double(100);
}

{
  let num1 = 100;
  let num2 = 50;

  console.log(num1 + num2);
}

{
  let num1 = 100;
  let num2 = 50;

  console.log(num1 - num2);
}

{
  let num1 = 100;
  let num2 = 50;

  console.log(num1 * num2);
}

{
  let num1 = 100;
  let num2 = 50;

  console.log(num1 / num2);
}

{
  let num1 = 100;
  let num2 = 50;

  console.log(num1 % num2);
}

{
  let num1 = 5;
  let num2 = 5;
  let num3 = 3.89;
  if (num1 == num2) {
    console.log('true');
  }else {
    console.log('false');
  }
}

{
  let num1 = 5;
  let num2 = 5;
  let num3 = 3.89;
  if (num1 != num2) {
    console.log('true');
  }else {
    console.log('false');
  }
}

{
  let num1 = 5;
  let num2 = 5;
  let num3 = 3.89;
  if (num1 < num3) {
    console.log('true');
  }else {
    console.log('false');
  }
}

{
  let num1 = 5;
  let num2 = 5;
  let num3 = 3.89;
  if (num1 <= num2) {
    console.log('true');
  }else {
    console.log('false');
  }
}

{
  let num1 = 5;
  let num2 = 5;
  let num3 = 3.89;
  if (num3 > num1) {
    console.log('true');
  }else {
    console.log('false');
  }
}

{
  let num1 = 5;
  let num2 = 5;
  let num3 = 3.89;
  if (num2 > num3) {
    console.log('true');
  }else {
    console.log('false');
  }
}

{
  for (let i = 0; i < 50; i++){
    console.log(i);
  }
}

{
  function aisatu(){
    return console.log('Hello');
  }
  aisatu();
}

{
  let count = 140;

  function coupon(price){
    return price - (price * 0.1);
  
  }
  let resultPrice = coupon(count);
  console.log(`${resultPrice}円です`);

}

{
  let count = 5;
  let word1 = 'ABC';
  let word2 = 'DEF';

  function createWord(a, b, c){
    let resultWord = '';
    for (let i = 1; i <= a; i++){
      if(i % 2 == 0){
        resultWord = resultWord + c;
      }else {
        resultWord = resultWord + b;
      }
    }
    return resultWord;
  }

  console.log(createWord(count, word1, word2));
}