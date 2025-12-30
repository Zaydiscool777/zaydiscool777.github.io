var d = document;

class Action {
    constructor(initdata, cond, act) {
        this.data = initdata;
        this.cond = cond;
        this.act = act; 
    }
    act() {
        if(this.cond()) {
            this.data = this.act(this.data);
        }
        upd();
    }
}

let count = 0;
let count_v0 = 1;

d.addEventListener("DOMContentLoaded", init);
function init() {
    d.getElementById("b_i0").addEventListener("click", 
        Action(
            {},
            () => True,
            () => {count += count_v0; return {}}
        ).act
    );
    d.getElementById("b_i1").addEventListener("click",
        Action(
            {},
            () => {count > 5},
            () => {count -= 5; count_v0++; return {}}
        ).act
    );
}

function upd() {
    d.getElementById("count").textContent = count;
    d.getElementById("b_i0").textContent = "+" + count_v0;
}
