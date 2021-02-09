document.addEventListener("DOMContentLoaded", ()=>{
    let form = document.querySelector("form");
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

    form.addEventListener("submit", (e) => {
        let num = document.getElementById("num").value;
        let oNum = document.getElementById("oNum").value;
        let n = parseInt(num);
        let oN = parseInt(oNum);
        e.preventDefault();
        makeBoard(n,oN);
        console.log("The submit has been pressed")
    })

    function makeRow(num){
        board.removeChild(form);
        for(let i = 0; i < num; i++){
            let row = document.createElement('div');
            row.id = `row${i}`;
            row.class = row
            board.append(row);
            console.log(i)
        }
    }
    
    function makeBoard(num, otherNum){
        let isHorizontal = true; 
        let counter = 0; 
        let numberOfRows = (otherNum * 2) + 1;
        let rowCount = 0;
        let divCount = 0;
        let numOfLines = ((num + num +1) * otherNum) + num;
        let width =  (board.offsetWidth /num) - 35;

        makeRow(numberOfRows);
        console.log(numberOfRows)

    for(let i = 0; i < numOfLines; i++){
        if(isHorizontal){
            let row = document.getElementById(`row${rowCount}`);
            let line = makeLine(`${i}`, `20px`, `${width}px`);
            row.append(line);
            counter++
            if(counter === num){
                rowCount ++;
                isHorizontal = false; 
                counter = 0;
            }
        }
        else{
            let row = document.getElementById(`row${rowCount}`)
            let line = makeLine(`${i}`, `${width}px`, `20px`)
            line.style.marginLeft = '10px'
            row.append(line);
            if(counter !== num){
                let div = makeLine(`divCount${divCount}`, `${width}px`, `${width}px`)
                row.append(div);
                divCount++
            }
            counter++
            if(counter === num + 1){
                rowCount ++;
                isHorizontal = true;
                counter = 0; 
            }
        }
    } 

    }
})