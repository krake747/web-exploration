export function createGreetingContainer(): HTMLDivElement {
    const container = document.createElement("div") as HTMLDivElement;
    container.className = "container";

    const greetingImg = document.createElement("img") as HTMLImageElement;
    greetingImg.id = "greeting-img";
    greetingImg.alt = "Greeting Logo";
    greetingImg.src = require("./../assets/greeting.svg") as string;

    container.appendChild(greetingImg);

    const header = document.createElement("h3") as HTMLHeadingElement;
    header.innerText = "Greeter";

    container.appendChild(header);

    const greetingDiv = document.createElement("div") as HTMLDivElement;
    greetingDiv.id = "greeting";
    greetingDiv.className = "greeting";

    container.appendChild(greetingDiv);

    const label = document.createElement("label") as HTMLLabelElement;
    label.htmlFor = "name";
    label.className = "label";
    label.innerText = "Name:";
    label.style.cssText = "margin-right: 4px";

    container.appendChild(label);

    const nameInput = document.createElement("input") as HTMLInputElement;
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.name = "name";
    nameInput.className = "input";
    nameInput.size = 10;
    nameInput.value = "Jon Snow";
    nameInput.style.cssText = "margin-right: 4px";

    container.appendChild(nameInput);

    const greetingBtn = document.createElement("button") as HTMLButtonElement;
    greetingBtn.id = "greeting-btn";
    greetingBtn.className = "btn";
    greetingBtn.innerText = "Greet";

    greetingBtn.addEventListener("click", () => {
        greetingDiv.innerHTML = greeter(nameInput.value);
    });

    container.appendChild(greetingBtn);

    return container;
}

function greeter(name: string): string {
    return `Hello ${name}!`;
}
