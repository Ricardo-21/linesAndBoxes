document.addEventListener("DOMContentLoaded", ()=>{
    let form = document.querySelector("form");
    let board = document.getElementById("board");

    class Line {
        constructor(num){
            this.line = document.getElementById(`${num}`);
            this.isTaken = false;
            this.takenBy = null;
        }
    }

    class Box {
        constructor(top, bottom, left, right, div){
            this.top = top;
            this.bottom = bottom;
            this.left = left;
            this.right = right;
            this.isTaken = false;
            this.div = document.getElementById(`divCount${div}`);

            this.color = null;
        }

        checkCompleteBox(){
            if(this.top.isTaken && this.bottom.isTaken && this.left.isTaken && this.right.isTaken && !this.isTaken){
                this.color = currentPlayer.color;
                currentPlayer.points += 1;
                currentPlayer.updatePoints();
                this.isTaken = true;
                this.div.style.backgroundColor = `${this.color}`;
            }
            console.log(this.color);
        }
    }

    class Player {
        constructor(name, color){
            this.name = name;
            this.color = color;
            this.points = 0;
        }

        updatePoints(){
            let span = currentPlayer === player1 ? document.getElementById('Player1').firstElementChild : document.getElementById('Player2').firstElementChild;
            span.innerText = `${this.points}`;
        }
    }



    const lines = [];
    const boxes = [];






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
            row.classList = "row"
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
        // let width =  (board.offsetWidth /num) - 35;
        let width = 120;

        if(num < 3){
            width = 200;
        }


        makeRow(numberOfRows);
        console.log(numberOfRows)

        for(let i = 0; i < numOfLines; i++){
            if(isHorizontal){
                let row = document.getElementById(`row${rowCount}`);
                let line = makeLine(`${i}`, `30px`, `${width}px`);
                row.append(line);
                lines.push(new Line(i));
                row.classList.add('h');
                counter++
                if(counter === num){
                    rowCount ++;
                    isHorizontal = false; 
                    counter = 0;
                }
            }
            else{
                let row = document.getElementById(`row${rowCount}`)
                let line = makeLine(`${i}`, `100px`, `30px`)
                // line.style.marginLeft = '10px'
                row.append(line);
                lines.push(new Line(i));
                if(counter !== num){
                    let div = makeLine(`divCount${divCount}`, `100px`, `${width}px`)
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
        
        boxCount = 0;
        colCount = 1;
        for(let i = 0; i < lines.length - num; i++) { //makes box instances
            let top = lines[i];
            let left = lines[i + num];
            let right = lines[i + num + 1]; 
            let bottom = lines[i + num + 1 + num];
            boxes.push(new Box(top, bottom, left, right, boxCount));
            if(colCount === num){
                i += num + 1;
                colCount = 0;
            }
            colCount ++;
            boxCount ++;
        }

        console.log(boxes)
    }

})