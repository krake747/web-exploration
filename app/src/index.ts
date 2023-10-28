import { greeter } from "./greeter";
import "./styles/main.scss";

const greetingImg = document.getElementById("greetingImg") as HTMLImageElement;
greetingImg.src = require("./assets/greeting.svg") as string;

const user = "TypeScript Developer";
console.log(greeter(user));
