
function numberInput(count) {
    
    var main = document.getElementById("dmitry-parent")
    main.innerHTML = "";
    for(var i = 0; i < count; i++) {
        createClicker(main, "clicker" + i);
    }
}

function createClicker(parent, id) {
    var div = document.createElement("div");

    var img = document.createElement("img");
    img.setAttribute("src", "img/1784.png");
    img.onclick = function () {
        clickMe(id);
    }
    

    var counter = document.createElement("div")
    counter.id = id;
    counter.innerText = "0";

    parent.appendChild(div);
    div.appendChild(img);
    div.appendChild(counter);
    
}

function clickMe(counter_id) {
    var el = document.getElementById(counter_id);
    var count = parseInt(el.innerText) + 1;
    el.innerHTML = count;
};