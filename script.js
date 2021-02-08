document.addEventListener("DOMContentLoaded", () => {
    let board = document.getElementById("board");
    let makeLine = (num, height, width) => {
        let line = document.createElement("div")
        line.id = num; 
        line.className = "ImALine"
        line.style.height = height;
        line.style.width = width;
        line.style.backgroundColor = "gray";
        line.style.margin = '5px';
        line.style.float = 'left';
        // board.append(line);
        return line;
    }
    let isHorizontal = true; 
    let counter = 0; 
    let rowCount = 1;
    for(let i = 0; i < 12; i++){
        if(isHorizontal){
            let row = document.getElementById(`row${rowCount}`);
            let line = makeLine(`${i}`, "10px", "190px");
            row.append(line);
            counter++
            if(counter === 2){
                rowCount ++;
                isHorizontal = false; 
                counter = 0;
            }
        }
        else{
            let row = document.getElementById(`row${rowCount}`)
            let line = makeLine(`${i}`, "140px", "10px")
            line.style.marginLeft = '10px'
            row.append(line);
            counter++
            if(counter === 3){
                rowCount ++;
                isHorizontal = true;
                counter = 0; 
            }
        }
    }
    
})