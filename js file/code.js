// DRAG & DROP

console.log("------------------------------------------------------- DRAG & DROP -------------------------------------------------------");

console.log("----------------------------------- DRAG & DROP -----------------------------------");

const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.getElementsByClassName("whiteBox");

// Event listeners for draggable element imgBox
imgBox.addEventListener("dragstart",(e)=>{
    console.log("dragstart");
    e.target.className += " hold";
    setTimeout(() => {
        e.target.className += " hide"
    }, 0);
});
imgBox.addEventListener("dragend",(e)=>{
    console.log("dragend");
    e.target.className = "imgBox";
});

for (whiteBox of whiteBoxes){
    whiteBox.addEventListener("dragover",(e)=>{
        console.log("dragover");
        e.preventDefault();
    });
    whiteBox.addEventListener("dragenter",(e)=>{
        console.log("dragenter");
        e.target.className += " dashed";
    });
    whiteBox.addEventListener("dragleave",(e)=>{
        console.log("dragleave");
        e.target.className = "whiteBox";
    });
    whiteBox.addEventListener("drop",(e)=>{
        console.log("drop");
        e.target.append(imgBox);
    });
};


console.log("-----------------------------------------------------------------------------------");



console.log("---------------------------------------------------------------------------------------------------------------------------");



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

