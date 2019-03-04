import "./style.css";
import printMe from "./print.js";
const btnHello = document.getElementById("start-btn");
btnHello.onclick = () => {
  const component = () => {
    let element = document.createElement("div");
    let btnPrint = document.createElement("button");
    btnPrint.innerHTML = "print console";
    btnPrint.onclick = printMe;
    element.innerHTML = "Hello webpack<br>";
    element.appendChild(btnPrint);
    return element;
  };
  document.body.appendChild(component());
};
