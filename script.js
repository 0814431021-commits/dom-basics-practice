console.log("script started");
 
function changeColor(){
    console.log("click");
    let color = prompt("Enter a new color for ther poem");
    let poem = document.getElementById("poem");
    poem.style.color = color;


}

