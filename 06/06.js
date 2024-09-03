document.addEventListener('DOMContentLoaded', ()=>{
  // 이미지 가져오기 
  const imgs = document.querySelectorAll('.secdice img');
  // 버튼 가져오기
  const bts = document.querySelectorAll('.secdice button');
  // 결과 가져오기 
  const msg = document.querySelector('#msg');

  // console.log(bts);


  // 버튼 클릭
  bts[1].addEventListener('click', ()=>{

  });


  for (let bt of bts) {
    console.log(bt); 
    bt.addEventListener('click', ()=>{
//컴퓨터 랜덤 수 
      let comN = Math.floor(Math.random()*6) + 1; //1~6
      imgs[0].setAttribute('src', `../img/${comN}.png`);

      //사용자 선택수
      console.log(bt.textContent.charAt(1));
      let userN = parseInt(bt.textContent.charAt(1)) ;
      imgs[1].setAttribute('src', `../img/${userN}.png`);


      //결과 출력 
      if (comN == userN)   msg.textContent = '맞음';
      else  msg.textContent = '틀림';
    });
  }

});