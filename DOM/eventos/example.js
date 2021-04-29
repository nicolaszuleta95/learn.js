const btnSend = document.querySelector(".btn-send");
const inputTxt = document.querySelector(".input-txt");
const divList = document.querySelector(".list");
let totalList = "";

const handleClick = () => {
  //console.log(divList);
  totalList += markUpLi();
  divList.innerHTML = totalList;
  inputTxt.value = "";
};

const handleKeyPress = (e) => {
  if (e.charCode === 13 || e.code === "Enter") {
    totalList += markUpLi();
    divList.innerHTML = totalList;
    inputTxt.value = "";
  }
};

const markUpLi = () => {
  return `<li class="inaki-list">${inputTxt.value}</li>`;
};

btnSend.addEventListener("click", handleClick);
document.body.addEventListener("keypress", (e) => handleKeyPress(e));
