const strt = document.getElementById("strt");
const strtNum = document.getElementById("strtNum");
const pstlCode = document.getElementById("pstlCode");
const city = document.getElementById("city");
const state = document.getElementById("state");
const country = document.getElementById("country");
// const btn1 = document.getElementById("btn1");
// const btn2 = document.getElementById("btn2");
const outputField = document.getElementById("outputField");

function fun1() {
  outputField.innerHTML =
    "Thank you for providing your home Address:" +
    "<br><br>" +
    strtNum.value +
    " " +
    strt.value +
    ", " +
    city.value +
    " " +
    pstlCode.value +
    ", " +
    state.value +
    ", " +
    country.value;
}

// // btn2.onclick = () => document.getElementById("container").requestFullscreen();
function fun2() {
  document.getElementById("container").reset();
}

const form = document.getElementById("container");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
