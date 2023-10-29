import "./styles/main.scss";
import "./styles/ag-grid.css";

import Enumerable from "linq";
import { createGreetingContainer } from "./greeter/greeter";
import BikeBrandsCsv from "./data/bike-brands.csv";

type BikeBrands = {
    BrandId: number;
    BrandName: number;
};

function createAgGridComponent() {
    // setup the grid after the page has finished loading
    const gridDiv = document.createElement("div") as HTMLDivElement;
    gridDiv.id = "myGrid";
    gridDiv.style.cssText = "margin-top: 4px; height: 200px; width:450px;";
    gridDiv.className = "ag-theme-alpine";

    document.addEventListener("DOMContentLoaded", async () => {
        const { Grid, ModuleRegistry } = await import("@ag-grid-community/core");
        const { ClientSideRowModelModule } = await import("@ag-grid-community/client-side-row-model");
        ModuleRegistry.register(ClientSideRowModelModule);

        const columnDefs = [
            { headerName: "BrandId", field: "BrandId" },
            { headerName: "BrandName", field: "BrandName" }
        ];

        const rowData = Enumerable.from<BikeBrands>(BikeBrandsCsv)
            .where(x => x.BrandId % 3 == 0)
            .toArray();

        const gridOptions = {
            columnDefs: columnDefs,
            rowData: rowData
        };

        new Grid(gridDiv, gridOptions);
    });

    return gridDiv;
}

document.body.prepend(createGreetingContainer());
document.body.appendChild(createAgGridComponent());
