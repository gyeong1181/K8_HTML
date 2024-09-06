let arr = [1, 2, 3, 4, 5];

console.log('arr : ', arr  )
console.log('arr 개수 ', arr.length  )

// arr.length = 0;
// console.log('arr : ', arr)




console.log(`for ... of`)
for(let i in arr) {
  console.log(`${parseInt(i)+1} 번째 : ${arr[i]}`);
}


console.log(`for ... of`)
for(let i in arr) {
  console.log(`${item % 2 == 0 ? "짝" : "홀"}`);
}



for (let i=0; i < arr.length ; i++) {
  console.log(`${item % 2 == 0 ? "짝" : "홀"}`);
}




for (let [i, item] of arr.entries()) {
  console.log(`${parseInt(i)+1} 번째 : ${item % 2 == 0 ? "짝" : "홀"}`)
}

console.log('forEach')
  arr.forEach((item, i) => {
    console.log(`${parseInt(i)+1} 번째 : ${item % 2 == 0 ? "짝" : "홀"}`)
  });




arr.push(6);
console.log('arr push : ', arr)
arr.pop();
console.log('arr pop : ', arr)

arr.unshift(6);
console.log('arr unshift : ', arr)
arr.shift();
console.log('arr shift : ', arr)

arr.splice(0,1);
console.log('arr splice : ', arr)

arr.splice(0,2, '♥');
console.log('arr splice : ', arr)

let arr2 = arr.splice(0,1)
console.log('arr spliceeeeee : ', arr)
console.log('arr splice : ', arr2)

console.log('맨처음요소 접근 : ', arr[0])
console.log('두번째요소 접근 : ', arr[1])


arr = [1, 2, 3, 4, 5];
arr2 = [];


arr = [];

for (let item of arr) {
  let item2 = item * 2;
  arr2.push(item2);
}

arr2 = arr.map(item,1) => { 
let arr2 = arr.map(item => {

return item2;

});
console.log('arr map 결과 arr2 : ', arr2);


arr2 = arr.map (item => item * 2 ? '짝' : '홀');
console.log('arr map 결과 arr2 : ', arr2) ;

arr = [];
for(let item of arr) {
  if (item % 2 == 0 ) arr2.push(item2) ;
}

console.log('arr filter for of 결과 arr2 : ', arr2);

arr2 = arr.filter (item => item * 2 == 0);
console.log('arr map 결과 arr2 : ', arr2) ;

arr = [4, 5, 2, 1, 3]
console.log(`${arr} => 정렬 ${arr.sort((a,b) => b-a )}`)
}


document.querySelector('DOMContentloaded', () => {
//요소 가져오기
  const divNum = document.querySelector('#divNum');
  const divplus = document.querySelector('#divplus');
  const divBonus = document.querySelector('#divBonus');
  const bt = document.querySelector('.sec > button');
  
// 요소 숨기기
  divNum.style.display = 'none';
  divplus.style.display = 'none';
  divBonus.style.display = 'none';

// 버튼 클릭
bt.addEventListener ('click', (e)=> {
  e.preventDefault();


let arr = [];
while(arr.length < 7) {
  let n = Math.floor(Math.random() * 45) + 1;
  if (!arr.includes(n) ) arr.push(n);


}

let arrBonus = arr.splice(6,1); 
arr.sort((a,b) => a-b);
console.log(arr);
console.log(arrBonus);

});

});