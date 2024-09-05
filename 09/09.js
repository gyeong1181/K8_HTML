let s = "Hello !" ; 

console.log('문자열 : '. s)
console.log('문자열 길이 : ', s.length)
console.log('문자열 길이 : ', s.toUpperCase());
console.log('숫자 확인 : ', isNaN(s));
console.log('첫 번째 글자 : ', s,[0]);
console.log('첫 번째 글자 : ', s[s.length -1]);
console.log('마지막 글자 : ', s.charAt[s.length -1]);
console.log('마지막 글자 : ', s.slice(-1));
console.log('마지막 글자 : ', s.slice(-1));
for(let c of s ) {
  console.log(c);
}


for (let i in s) {
  console.log(i);
}

// 문자열 확인 
console.log('h문자열 확인 : ', s.includes('JS'));
console.log('h문자열 확인 : ', s.indexOf('JS'));

// 문자열 자르기 
console.log('문자열 자르기 : ', s.substring(5,0));
console.log('문자열 자르기 : ', s.slice(5,0));


// s = '1234';
// console.log('숫자 확인 : '. s.isNaN(s));
// console.log('숫자 확인 : '. isNaN(s));




 document.addEventListener('DOMContentLoaded', ()=> {

// 요소 가져오기 
  const txt1 = document.querySelector('#txt1');
  const txt2 = document.querySelector('#txt2');

  const bt1 = document.querySelector('#bt1');
  const bt2 = document.querySelector('#bt2');

  //회문
  bt1.addEventListener('click', (e)=> {
    e.preventDefault();

    let s1 = txt1.value.replaceAll(' ', '');
    let s2 = '';

    // for(let i = s1.length - 1; i >=0; i--) {
    //   s2 = s2 + s1[i];
    // }

    s2 = s1.split('').reverse().join('')

    console.log('s1=', s1) ;
    console.log('s2=', s2) ;

    if (s1 == s2) txt2.value = '회문입니다.';
    else txt2.value = '회문이 아닙니다.';

  });

  bt2.addEventListener('click', (e)=> {
    e.preventDefault();

    let total = 0;
    for (let c of txt1.value) {
      if (!isNaN(c)) {
        total = total + parseInt(c);
      }
    }

    txt2.value = total ;

  });

  });