const background = document.querySelector(".background");
const box = document.getElementById("box");
for(let i=1; i<=64; i++) {
    background.innerHTML += '<div class="column" id="column'+i+'"></div>'
    var column = document.getElementById("column"+i);
    for(let j=1; j<33; j++) {
        column.innerHTML += "<div></div>";
    }
}
dragAndDrop(box);
const attr = document.querySelectorAll(".attr");
attr.forEach(attr => {
    const input =  attr.querySelector("input");
    input.addEventListener("blur",function(){
        input.value = Math.round(input.value / 30)*30;
    });
});
const boxWidth = document.getElementById("box-width");
const boxHeight = document.getElementById("box-height");
boxWidth.addEventListener("input",function(){
    box.style.width = boxWidth.value+"px";
});
boxHeight.addEventListener("input",function(){
    box.style.height = boxHeight.value+"px";
});
