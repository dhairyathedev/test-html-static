let count = 0;

const increment = () => {
    const display = document.getElementById("count");
    count++;
    display.innerText = count;
}
