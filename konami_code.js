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
  let index = 0;
  document.body.addEventListener('keydown', onKeyDownHandler);
  
  function onKeyDownHandler(e) {
    const key = e.key;
    
    if ( key === codes[index]) {
      console.log('key', key);
      
      if(index === codes.length) 
      { 
      alert("Hurray"); 
      index = 0;
      }
    } else {
      index = 0;
    }
  }
}
