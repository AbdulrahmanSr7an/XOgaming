let dashboard = document.querySelector(".dashboard");
let p = dashboard.querySelector("p");
let span = p.querySelector("span");
let container = document.querySelector(".container");
let divXO = container.querySelectorAll("div");
let bool = true;

function checkXO(char) {
  if (divXO[0].classList.contains(char) && divXO[1].classList.contains(char)&& divXO[2].classList.contains(char)) {
    for (let i = 0; i <= 2; i++){
      divXO[i].style.backgroundColor = "#1E1E1E";
    }
    p.textContent = `${char} is Winning`;
    controller.abort();
  }
  if (divXO[3].classList.contains(char) && divXO[4].classList.contains(char)&& divXO[5].classList.contains(char)) {
    for (let i = 3; i <= 5; i++){
      divXO[i].style.backgroundColor = "#1E1E1E";
    }
    p.textContent = `${char} is Winning`;
    controller.abort();
  }
  if (divXO[6].classList.contains(char) && divXO[7].classList.contains(char)&& divXO[8].classList.contains(char)) {
    for (let i = 6; i <= 8; i++){
      divXO[i].style.backgroundColor = "#1E1E1E";
    }
    p.textContent = `${char} is Winning`;
    controller.abort();
  }
  if (divXO[0].classList.contains(char) && divXO[4].classList.contains(char)&& divXO[8].classList.contains(char)) {
    let arr = [0, 4, 8];
    for (let i = 0; i < arr.length; i++) {
      divXO[arr[i]].style.backgroundColor = "#1E1E1E";
    }
    p.textContent = `${char} is Winning`;
    controller.abort();
  }
  if (divXO[2].classList.contains(char) && divXO[4].classList.contains(char)&& divXO[6].classList.contains(char)) {
    let arr2 = [2, 4, 6];
    for (let i = 0; i < arr2.length; i++) {
      divXO[arr2[i]].style.backgroundColor = "#1E1E1E";
    }
    p.textContent = `${char} is Winning`;
    controller.abort();
  }
  if (divXO[0].classList.contains(char) && divXO[3].classList.contains(char) && divXO[6].classList.contains(char)) {
    let arr3 = [0 , 3 , 6] 
    for (let i = 0; i < arr3.length; i++) {
      divXO[arr3[i]].style.backgroundColor = "#1E1E1E";
    }
    p.textContent = `${char} is Winning`;
    controller.abort();
  }
  if (divXO[1].classList.contains(char) && divXO[4].classList.contains(char)&& divXO[7].classList.contains(char)) {
    let arr4 = [1, 4, 7];
    for (let i = 0; i < arr4.length; i++) {
      divXO[arr4[i]].style.backgroundColor = "#1E1E1E";
    }
    p.textContent = `${char} is Winning`;
    controller.abort();
  }
  if (divXO[2].classList.contains(char) && divXO[5].classList.contains(char)&& divXO[8].classList.contains(char)) {
    let arr5 = [2, 5 , 8];
    for (let i = 0; i < arr5.length; i++) {
      divXO[arr5[i]].style.backgroundColor = "#1E1E1E";
    }
    p.textContent = `${char} is Winning`;
    controller.abort();
  }
  
}
const controller = new AbortController();
const signal = controller.signal;
divXO.forEach((ele , index)=> {
  ele.addEventListener('click', function () {
    if (bool === true) {
      ele.textContent = "X";
      bool = false;
      p.textContent = "Turn O playing";
      ele.classList.add("x")
      checkXO("x");
    }
    else {
      ele.textContent = "O";
      bool = true
      p.textContent = "Turn X playing";
      ele.classList.add("o");
      checkXO("o");
    }
  }, { once: true, signal: signal})
})
