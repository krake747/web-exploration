import { greeter } from "./greeter";
import "./styles/main.scss";

const greetingImg = document.getElementById("greeting-img") as HTMLImageElement;
greetingImg.src = require("./assets/greeting.svg") as string;

const greetingBtn = document.getElementById("greeting-btn") as HTMLButtonElement;
greetingBtn.addEventListener("click", () => {
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const greetingDiv = document.getElementById("greeting") as HTMLDivElement;
    greetingDiv.innerHTML = greeter(nameInput.value);
});
