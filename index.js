// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

function writeCards(arr, event) {
    let newArr = [];
for(let i=0; i<arr.length; i++) {
    let message =`Thank you, ${arr[i]}, for the wonderful ${event} gift!`
    newArr.push(message);
}
return newArr
}

// console.log(writeCards(["Charlie", "Samip", "Ali"],"birthday"))

function countDown(num) {
while (num>=0) {
    console.log(num)
    num--;
}
}

console.log( countDown(10))