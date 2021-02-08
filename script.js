document.addEventListener("DOMContentLoaded", () => {
    let board = document.getElementById("board");
    let makeLine = (num, height, width, row) => {
        let line = document.createElement("div")
        line.id = num; 
        line.style.height = height;
        line.style.width = width;
        line.style.backgroundColor = "gray";
        line.style.float = "left";
        line.style.margin = "20px";
      //  row.append(line);
    }
    let isHorizontal = true; 
    let counter = 0; 
    for(let i = 0; i < 13; i++){
        if(isHorizontal){
            let row = document.createElement("div")
            makeLine(`${i}`, "50px", "200px", row)
           // line.style.float = "left"
           board.append(row)
            counter++
            if(counter === 2){
                isHorizontal = false; 
                counter = 0;
                row.append(line)
               // board.append(document.createElement("br"));
            }
        }
        else{
            let row = document.createElement("div")
            makeLine(`${i}`, "200px", "50px",row)
            counter++
            board.append(row)
            if(counter === 3){
                isHorizontal = true;
                counter = 0; 
                row.append(line)
               // board.append(document.createElement("br"));
            }
        }
    }
    
})