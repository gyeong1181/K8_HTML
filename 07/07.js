document/addEventListener('DOMContentLoaded', ()=>{

const handleChange (s1, s2, lb1, lb2) => {
  if (s1.value === '°C') s2,value = '°F';
  else s2.value = '°C';

  lb1.innerHTML = s1. value;
  lb2.innerHTML = s2. value;
}
 
  // 요소 가져오기 
  const sel1  = document.querySelector('#sel1')
  const sel2  = document.querySelector('#sel2')

  const txt1  = document.querySelector('#txt1')
  const txt2  = document.querySelector('#txt2')



//select box
  sel1.addEventListener('change', ()=> { 

    handleChange(sel1,sel2. lb1, lb2) ;

    // if (sel1.value === '°C') sel2.value = '°F';
  // else sel2.value = '°C';
  
});

  sel2.addEventListener('change', ()=> {  
    andleChanege(sel2, sel1, lb2, lb1) ;
    // if (sel1.value === '°C') sel2.value = '°F';
    // else sel2.value = '°C';
    
  });

  sel1.addEventListener('input', ()=> { 
  if (sel1.value === '°C') {
    // 섭씨온도 => 화씨온도
    txt2.value = parseFloat(txt1.value) * (9 / 5) + 32.tofixed(3);
  } else {
    txt2.value = parseFloat(txt1.value) -32 * (5 / 9).tofixed(3);
  }


});











