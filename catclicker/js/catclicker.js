function clickMe() {
    var el = document.getElementById("counter");
    var count = parseInt(el.innerText) + 1;
    el.innerHTML = count;
};