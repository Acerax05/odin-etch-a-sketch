let mainContainer = document.querySelector(".container");

//function makeParent(divNum) {
 //   for (i = 0; i < divNum; i++) {
 //       let div = document.createElement("div");
//        mainContainer.appendChild(div);
//        div.setAttribute("class","grid");
 //   };
    
//};

//makeDivs(256);

function makeParentDivs(divNum) {
    for (i = 0; i < divNum; i++) {
        let parentDiv = document.createElement("div");
        mainContainer.appendChild(parentDiv);
        parentDiv.setAttribute("class","parent grid");
        makeChildDivs(divNum)
    };

};

function makeChildDivs(divNum) {
    for (j = 0; j < divNum; j++) {
        let childDiv = document.createElement("div");
        let parentDivSelector = mainContainer.lastElementChild;
        parentDivSelector.appendChild(childDiv);
        childDiv.setAttribute("class","child grid");
    };
};




makeParentDivs(40
)

const changeColor = document.querySelectorAll(".child");

changeColor.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        div.classList.add("color");
    });
});