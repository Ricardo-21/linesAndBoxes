document.addEventListener('DOMContentLoaded', function(){
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
            this.div = document.getElementById(`${div}`);

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


    const line1 = new Line(0);
    const line2 = new Line(1);
    const line3 = new Line(2);
    const line4 = new Line(3);
    const line5 = new Line(4);
    const line6 = new Line(5);
    const line7 = new Line(6);
    const line8 = new Line(7);
    const line9 = new Line(8);
    const line10 = new Line(9);
    const line11 = new Line(10);
    const line12 = new Line(11);

    let player1 = new Player('ricardo', '#3F8EFC');
    let player2 = new Player('groot', '#C04ABC');

    let currentPlayer = player1;

    const box1 = new Box(line1, line6, line3, line4, 102);
    const box2 = new Box(line2, line7, line4, line5, 103);
    const box3 = new Box(line6, line11, line8, line9, 107);
    const box4 = new Box(line7, line12, line9, line10, 108);

    const boxes = new Array(box1, box2, box3, box4);


    let lines = new Array(line1,line2,line3,line4,line5,line6,line7,line8,line9,line10,line11,line12);
    lines.forEach(line => {
        line.line.addEventListener('click', function(){
            if(line.isTaken === false){
                line.isTaken = true;
                line.line.style.backgroundColor = currentPlayer.color;
                boxes.forEach(box => box.checkCompleteBox());
                currentPlayer = currentPlayer === player1 ? player2 : player1;
            }
        });
    })






    
});