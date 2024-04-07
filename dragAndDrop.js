let posX = 30, posY = 30;
function dragAndDrop(element,active) {
    if(active == false) return;
    
    let grabPointX, grabPointY, isDrag = false;

    const onDragStart = function (ev) {
        var boundingClientRect;

        boundingClientRect = element.getBoundingClientRect();
        grabPointY = boundingClientRect.top - ev.clientY;
        grabPointX = boundingClientRect.left - ev.clientX;

        isDrag = true;
    }
    const onDrag = function (ev) {
        if (isDrag == false) return;

        posX = ev.clientX + grabPointX,
        posY = ev.clientY + grabPointY;

        setPosition();
    }
    const onDragEnd = function () { 
        isDrag = false;
        
        const box = document.getElementById("box");

        posX = Math.round(posX/30)*30;
        posY = Math.round(posY/30)*30;

        if(posX < 30 || posX + box.offsetWidth < 210) posX = 30; 
        else if(posX > width - box.offsetWidth - 30) posX = (width - box.offsetWidth - 30);
        if(posY < 30 || posY + box.offsetHeight < 210) posY = 30;
        else if(posY > height - box.offsetHeight - 30) posY = (height - box.offsetHeight - 30);
        setPosition();
     }
    const setPosition = function() { element.style.transform = `translateX(${posX}px) translateY(${posY}px)`; }
    document.addEventListener("mousemove", onDrag, false);
    element.addEventListener("mousedown", onDragStart, false);
    document.addEventListener("mouseup", onDragEnd, false);

    let width, height;
    const setWindowWidthAndHeight = function() {
        width = Math.round(innerWidth/30)*30;
        height = Math.round(innerHeight/30)*30;

        onDragEnd();
    }
    window.addEventListener("load",setWindowWidthAndHeight);
    window.addEventListener("resize",setWindowWidthAndHeight);
}