const mainContainer = document.querySelector(".container");

function RGBcolor() {
    var R = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);
    var randomcolor = "rgb(" + R + "," + G + "," + B + ")";  
    return randomcolor;
  }

function makeParentDivs(divNum) {
    for (i = 0; i < divNum; i++) {
        let parentDiv = document.createElement("div");
        mainContainer.appendChild(parentDiv);
        parentDiv.setAttribute("class","parent grid");
        makeChildDivs(divNum)
    };

    const changeColor = document.querySelectorAll(".child");

    changeColor.forEach((div) => {
        div.addEventListener("mouseover", () => {
            //div.classList.add("color");
            let newColor = RGBcolor();
            div.style.backgroundColor = newColor; 
        });
    });
};

function makeChildDivs(divNum) {
    for (j = 0; j < divNum; j++) {
        let childDiv = document.createElement("div");
        let parentDivSelector = mainContainer.lastElementChild;
        parentDivSelector.appendChild(childDiv);
        childDiv.setAttribute("class","child grid");
    };
};

const gridButton = document.querySelector(".grid-button");

gridButton.addEventListener("click", () => {
    promptAnswer = prompt("How many squares per side?",);
    deletableNodes = promptAnswer;
    const children = document.querySelector(".parent");

    if (children != null) {
        while (mainContainer.firstChild) {
            mainContainer.removeChild(mainContainer.firstChild);
        };
    };

    makeParentDivs(promptAnswer);
});