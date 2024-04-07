const points = new Array();
class Point {
    constructor() {
        this.id = null;
        this.point = null;
        this.x = 90;
        this.y = 90;
        this.xInput = null;
        this.yInput = null;
        this.checkBtn = null;
        this.removeBtn = null;
        this.options = null;

        const init = () => {
            this.id = points.length + 1;
            //Create Option Space
            document.getElementById("points-list").innerHTML += `<p id="point-options${this.id}"><span>Point ${this.id}</span><input type="number" value="${this.x}" step="30" id="x${this.id}"><input type="number" value="${this.y}" step="30" id="y${this.id}"><span class="check" id="check${this.id}">Check</span><span class="remove" id="remove${this.id}">X</span></p>`;

            //Create a Point on the map
            const point = document.createElement("div");
            point.setAttribute("class","point");
            point.setAttribute("id",`point${this.id}`);
            document.body.appendChild(point);
            this.point = document.getElementById("point"+this.id);

        }
        init();
    }
    load() {
        this.options = document.getElementById("point-options"+this.id);
        this.xInput = document.getElementById("x"+this.id);
        this.yInput = document.getElementById("y"+this.id);
        this.checkBtn = document.getElementById("check"+this.id);
        this.removeBtn = document.getElementById("remove"+this.id);

        this.xInput.value = this.x;
        this.yInput.value = this.y;

        const createMessage = (value) => {
            if(document.querySelector(".message"))
                document.querySelector(".message").remove();

            const message = document.createElement("div");
            message.setAttribute("class","message");
            message.textContent = value;
            document.body.appendChild(message); 

            const messageNode = document.querySelector(".message");

            setTimeout(() => { messageNode.style.opacity = 1; });
            setTimeout(() => {
                messageNode.style.opacity = 0;
                setTimeout(() => { messageNode.remove(); },200);
            },3000);
        }

        this.xInput.addEventListener("input",() => {
            this.x = parseInt(this.xInput.value);
            this.point.style.left = this.x+"px";
        });
        this.yInput.addEventListener("input",() => {
            this.y = parseInt(this.yInput.value);
            this.point.style.top = this.y+"px";
        });
        this.removeBtn.addEventListener("click",() =>{
            delete points[this.id-1];
            this.options.remove();
            document.getElementById("point"+this.id).remove();
        });
        this.checkBtn.addEventListener("click",() => {
                if(this.y >= posY && this.x >= posX && this.y <= posY + box.offsetHeight && this.x <= posX + box.offsetWidth) createMessage(`Point ${this.id} is in the Box`);
                else createMessage(`Point ${this.id} is not in the Box`);
        });
        this.options.addEventListener("mouseover",() => {
            this.point.style.backgroundColor = "#b30f00";
        });
        this.options.addEventListener("mouseleave",() => {
            this.point.style.backgroundColor = "black";
        });
    }
}

const addPoint = document.querySelector("button");
addPoint.addEventListener("click",function(){
    points.push(new Point());
    points.forEach(point => { point.load(); })
})