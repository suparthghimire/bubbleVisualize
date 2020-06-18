var x = [4, 3, 2, 1];
// var x = [1,9,2,3,7,6,4,5,5];
var len = x.length;
var bar;
const sort = document.getElementById("sortBtn");
sort.addEventListener("click", bubbleSort);

const temp = document.getElementById("temp");
const test = 5;
const main = document.getElementById("main");
const barContainer = document.getElementById("barContainer");
init();

// setTimeout(init,3000)

function init() {
  for (var i = 0; i < x.length; i++) {
    bar = document.createElement("div");
    bar.classList.add("bar");
    bar.setAttribute("id", `bar${x[i]}`);
    var barHeight = document.createElement("p");
    barHeight.classList.add("barHeight");
    barHeight.innerHTML = x[i];
    bar.style.height = x[i] * 20 + "px";
    bar.appendChild(barHeight);
    barContainer.appendChild(bar);
  }
}

function bubbleSwapCnt() {
  let swapCnt = 0;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - i - 1; j++) {
      if (x[j] > x[j + 1]) {
        swapCnt++;
      }
    }
  }
  return swapCnt;
}
function removeChildContainer(parent) {
  while(parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
function timer(ms) { return new Promise(res => setTimeout(res, ms)); }

async function bubbleSort() {
  // console.log(x);
  let swapCnt = bubbleSwapCnt();
  let iteration = 0;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - i - 1; j++) {
      if (x[j] > x[j + 1]) {
        var temp = x[j];
        x[j] = x[j + 1];
        x[j + 1] = temp;
        iteration++;

        if (iteration <= swapCnt) {
          console.log(1);
          removeChildContainer(barContainer);
        }
        // setTimeout(init,i*3000);
        init();
        await timer(500);
      }
    }
  }

  // console.log(x);
  removeClick();
  return x;
  // init();
}


function removeClick() {
  message = document.createElement("p");
  message.classList.add("message");
  message.innerHTML = "Already Sorted!";
  main.appendChild(message);
  sort.removeEventListener("click", bubbleSort);
}

