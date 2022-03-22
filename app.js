
function moveLeft(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 100;
    if(left >= 0){
        character.style.left = left + "px"
    }
    
}

function moveRigth(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 100;
    if(left < 250){
        character.style.left = left + "px" 
    }
    
}
document.addEventListener("keydown", event =>{
    if(event.key==="ArrowLeft"){moveLeft();}
    if(event.key==="ArrowRight"){moveRigth();}
})

let block = document.getElementById("block");
let counter = 0

block.addEventListener("animationiteration", ()=>{
     let random = Math.floor(Math.random() * 3);
     left = random * 100;
     block.style.left = left + "px"
     counter++
})


setInterval(()=>{
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let blockTop = 
    parseInt(window.getComputedStyle(block).getPropertyValue("top"));

    if(characterLeft == blockLeft && blockTop < 500 && blockTop > 300){
        alert("Game Over Score: " +counter)
        block.style.animation = "none"
    }
},1);

document.getElementById("left").addEventListener("touchcancel", moveLeft);
document.getElementById("right").addEventListener("touchstart", moveRigth)

