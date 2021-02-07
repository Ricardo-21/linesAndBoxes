document.addEventListener("DOMContentLoaded", () => {
    let board = document.getElementById("board");
    let makeLine = (num, height, width) => {
        let line = document.createElement("div")
        line.id = num; 
        line.style.height = height;
        line.style.width = width;
        line.style.backgroundColor = "gray";
        board.append(line);
    }
    let isHorizontal = true; 
    let counter = 0; 
    for(let i = 0; i < 13; i++){
        if(isHorizontal){
            makeLine(`${i}`, "10px", "50px")
            counter++
            if(counter === 2){
                isHorizontal = false; 
                counter = 0;
            }
        }
        else{
            makeLine(`${i}`, "50px", "10px")
            counter++
            if(counter === 3){
                isHorizontal = true;
                counter = 0; 
            }
        }
    }
    
})