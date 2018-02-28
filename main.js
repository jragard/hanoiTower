// let discParent = document.getElementsByClassName(".rod");
// let grab = discParent.firstElementChild;

let source = true;

let lastRod = document.getElementById("rod3");
let count;

let midRod = document.getElementById("rod2");
let count2;

handleClick = function (event) {
    let rod = event.currentTarget;
    let last = rod.lastElementChild;
    let smallDisc = document.getElementById("small");
    let medDisc = document.getElementById("medium");
    let largeDisc = document.getElementById("large");
    let exLgDisc = document.getElementById("exlarge");
    let emptyDiv = document.getElementById("empty");
    let emptyDivChild = emptyDiv.lastElementChild;
    let winText = document.createTextNode("You Fucking Win!");
    let destination = document.getElementById("win");

    if (source === true && emptyDivChild === null) {
        emptyDiv.appendChild(last);
        source = false;
    } else {
        if (last === null) {
            rod.appendChild(emptyDivChild);
        } else if (last === exLgDisc) {
            rod.appendChild(emptyDivChild);
        } else if (last === largeDisc && emptyDivChild === medDisc || last === largeDisc && emptyDivChild === smallDisc) {
            rod.appendChild(emptyDivChild);
        } else if (last === medDisc && emptyDivChild === smallDisc) {
            rod.appendChild(emptyDivChild);
        }
        count = lastRod.childElementCount;
        count2 = midRod.childElementCount;
        source = true;
        

        if (count === 4) {
            destination.appendChild(winText);

            for (let i = 0; i < rods.length; i++) {
                rods[i].removeEventListener("click", handleClick);


            }
        }

        if (count2 === 4) {
            destination.appendChild(winText);

            for (let i = 0; i < rods.length; i++) {
                rods[i].removeEventListener("click", handleClick);
            }
        }
    }
}

let rods = document.querySelectorAll(".rod");

for (let i = 0; i < rods.length; i++) {
    rods[i].addEventListener('click', handleClick);
}