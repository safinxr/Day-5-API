const lodeWord = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(word => displayWord(word))
}
const displayWord = (w) => {
    const blockWord = document.getElementById("block");
    blockWord.innerText = w.quote;
}