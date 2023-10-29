import Enumerable from "linq";
import { createGreetingContainer } from "./greeter/greeter";
import "./styles/main.scss";

type BikeBrand = {
    BrandId: number;
    BrandName: number;
};

const bikeBrands: BikeBrand[] = require("./data/bike-brands.csv");
console.table(
    Enumerable.from(bikeBrands)
        .where((x: BikeBrand) => x.BrandId % 3 == 0)
        .toArray()
);

document.body.appendChild(createGreetingContainer());
