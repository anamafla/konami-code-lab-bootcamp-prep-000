const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  console.log('I am in function init')
  document.body.addEventListener('keydown', alert('You click'));
  
  function onKeyDownHandler(e) {
    const key = e.key;
    
    if ( key === codes[index]) {
      index++;
      
      if(index === alphabet.length) 
      { alert("Hurray"); 
      index = 0;
    }
  }
}
