let obj = {
  apple:'🍎', 
  carrot : '🥕', 
  banana : '🍌'
} ;

// object 접근
console.log(obj['apple']);
console.log(obj.apple);


// object 순회 
for(let k in obj) {
  console.log(`${k} => ${obj[k]}`);
}

for(let k in Object.values(obj)) {
  console.log(`${k}`) ;
}


for(let [k, item] of Object.entries(obj)) {
  console.log(`${k} => ${item}`) ;
}

// 자료 추가 
obj['수박'] = '🍉';
console.log(obj);
console.log(obj['수박']);


delete obj['수박'];
console.log(obj);

// object 병합 
obj2 = {orange :'🍊'};
obj = {...obj2, ...obj};
console.log(obj);