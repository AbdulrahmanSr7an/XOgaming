let dashboard = document.querySelector(".dashboard");
let p = dashboard.querySelector(".head");
let span = p.querySelector("span");
let container = document.querySelector(".container");
let divXO = container.querySelectorAll("div");
let bool = true;
let pReturn = document.getElementById("return");
const probability = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
let endGame = 0;
let win;
function checkXO(char) {
  for (let i of probability) {
    win = 0;
    for (let ele of i) {
      if (divXO[ele].classList.contains(char)) {
        win++;
      }
    }
    if (win === 3) {
      for (ele of i) {
        divXO[ele].style.backgroundColor = "#1E1E1E";
      }
      break;
    }
  }
  if (win === 3) {
    return true;
  } else return false;
}

const controller = new AbortController();
const signal = controller.signal;
divXO.forEach((ele, index) => {
  ele.addEventListener(
    "click",
    function () {
      if (bool === true) {
        ele.textContent = "X";
        bool = false;
        p.textContent = "Turn O playing";
        p.style.color = "#FFD700";
        endGame++;
        console.log(endGame);
        ele.classList.add("x");
        if (checkXO("x")) {
          p.textContent = `${"X"} is Winning`;
          controller.abort();
        } else {
          if (endGame === 5) {
            p.classList.add("display");
            pReturn.classList.remove("display");
            pReturn.classList.add("visiable");
            setTimeout(function () { 
              location.reload()
            },
            2000)
          }
        }
      } else {
        ele.textContent = "O";
        bool = true;
        p.textContent = "Turn X playing";
        p.style.color = "#FFD700";
        ele.classList.add("o");
        if (checkXO("o")) {
          p.textContent = `${"O"} is Winning`;
          controller.abort();
        }
      }
    },
    { once: true, signal: signal }
  );
});