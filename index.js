let count = 0;

function updateCounter() { // give the statement updateCounter
  document.getElementById("counter").innerHTML = count;
  }


function increment() {
  count ++;
  updateCounter();
}
 
function decrement() {
  count --;
  updateCounter();
}

function reset() {
  count = 0;
  updateCounter();
}



