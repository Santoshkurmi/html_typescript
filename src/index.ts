
const header: HTMLElement | null = document.getElementById("header");


const changeColor = (e: MouseEvent) => {
    if (header) header.style.color = "red";
}

if (header) header.addEventListener("click", changeColor);
