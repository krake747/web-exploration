import { createGreetingContainer } from "./greeter/greeter";
import "./styles/main.scss";

const bikeBrands = require("./data/bike-brands.csv");
console.table(bikeBrands);

document.body.appendChild(createGreetingContainer());
