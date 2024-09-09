document.addEventListener('DOMContentLoaded', () => {

  // 요소 가져오기 
  const txt1 = document.querySelector('#txt1');
  const secBt1 = document.querySelectorAll('.secBt1');
  const secBt2 = document.querySelectorAll('.secBt2');
  const secBt3 = document.querySelectorAll('.secBt3');
  const secBt41 = document.querySelector('#secBt41');
  const secBt42 = document.querySelector('#secBt42');


  // object 생성 
  let obj = {
    apple: '🍎',
    orange: '🍊',
    banana: '🍌',
  };


  let jsonDt;
  secBt41.addEventListener('click', (e) => {
    e.preventDefault();


    jsonDt = JSON.stringify(obj);
    console.log('obj = ', obj);
    console.log('obj = ', obj["apple"]);
    console.log('jsonDt = ', jsonDt);
    console.log('jsonDt = ', jsonDt["apple"]);

  })



  secBt42.addEventListener('click', (e) => {
    e.preventDefault();

    let obj2 = JSON.parse(jsonDt);
    console.log('obj2 = ', obj);
    console.log('obj2 = ', obj["apple"]);

  })






  //버튼 하나하나 들어가짐   추가 
  for (let bt of secBt1) {
    bt.addEventListener('click', (e) => {
      e.preventDefault();

      let addItem = bt.innerHTML.replace('추가', '');
      txt1.value = txt1.value + addItem;
      console.log(bt.innerHTML);
    });
  }






  // 삭제
  for (let bt of secBt2) {
    bt.addEventListener('click', (e) => {
      e.preventDefault();

      let addItem = bt.innerHTML.replace('삭제', '');

      // // case 1
      txt1.value = txt1.value.replaceAll(addItem, '');

      // let tmArr = Array.from(txt1.value); // 이모지 형태로 분리 

      // case 2 
      //  for(let i = 0 ; i < tmArr.length; i++) {
      //    if (tmArr[i] == addItem ) tmArr[i] = '';
      //   }


      // case 3
      // tmArr = tmArr.filter( item => item != addItem) ;


      // tmArr = tmArr.join('') ; 
      // txt1.value = tmArr;
      // console.log(tmArr);


    });
  }






  // 교체 
  for (let bt of secBt3) {
    bt.addEventListener('click', (e) => {
      e.preventDefault();

      let item = bt.innerHTML.split('+');
      console.log('items = '.items);

      // txt1.value = txt1.value.replaceAll(items[0], items[1])'

      let tmArr = array.from(txt1.value);
      tmArr = tmArr.map(item => item == item[0] ? item[1] : item);
      txt1.value = tmArr.join('');

      // tmArr = tmArr.join('') ;   
      console.log(tmArr);



    });
  }


});
