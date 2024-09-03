

// dom 생성된 후 이벤트 감지

document.addEventListener('DOMContentLoaded', () => {

  // 버튼 요소 가져오기 
  const bt1 = document.getElementById('bt1');
  const bt2 = document.querySelector('#bt2');
  const bt3 = document.querySelector('#bt3');
  const msg = document.querySelector('#msg');

  // 버튼에 이벤트 달기
  bt1.addEventListener('click', ()=>{
    alert(bt1.innerHTML);
    // 버튼 클릭 하면 팝업 뜸
  });
  bt2.addEventListener('click', ()=>{
    alert(bt2.textContent);
  });
  bt3.addEventListener('click', ()=>{
    // msg.innerHTML = '<h2>랜덤수생성</h2>' ;
    let n = Math.floor(Math.random() * 6) + 1 ;
    // 주사위 난수
    console.log('n=', n) ; 

    msg.innerHTML = `<h2>${bt3.textContent}:<span>${n}</span></h2>`;
  //  alert(bt3.textContent);
    // '랜덤 수 생성' 버튼 누르면 가운데 화면에 '랜덤수생성'   이라고 문구 뜸
  });
} );
// html 문서가 어떤 이벤트가 되는지 감지. () => {} 이건 화살표 함수. 이게 인수로 들어간다. 이걸 콜백함수라고 한다. 

// 100% 다 이해하고 갈 수 없는 시간과 분량이다. 이런 식으로 흘러가구나 하고 가볍게 보자. 