import Enumerable from "linq";
import { createGreetingContainer } from "./greeter/greeter";
import BikeBrandsCsv from "./data/bike-brands.csv";
import "./styles/main.scss";

type BikeBrands = {
    BrandId: number;
    BrandName: number;
};

const bikeBrands: BikeBrands[] = BikeBrandsCsv;
console.table(
    Enumerable.from(bikeBrands)
        .where(x => x.BrandId % 3 == 0)
        .toArray()
);

document.body.appendChild(createGreetingContainer());
