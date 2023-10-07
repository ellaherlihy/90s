const container = document.querySelector(".browser-frame");
function onMouseDrag({ movementX, movementY }) {
    let getContainerStyle = window.getComputedStyle(container);
    let leftValue = parseInt(getContainerStyle.left);
    let topValue = parseInt(getContainerStyle.top);
    container.style.left = `${leftValue + movementX}px`;
    container.style.top = `${topValue + movementY}px`;
}
container.addEventListener("mousedown", () => {
    container.addEventListener("mousemove", onMouseDrag);
});
document.addEventListener("mouseup", () => {
    container.removeEventListener("mousemove", onMouseDrag);
});

const wikiBaseURL = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=";
