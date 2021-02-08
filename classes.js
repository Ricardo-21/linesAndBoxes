document.addEventListener('DOMContentLoaded', function(){
    class Line {
        constructor(num){
            this.line = document.getElementById(`${num}`);
            this.isTaken = false;
            this.takenBy = null;
        }
    }

    class Box {
        constructor(top, bottom, left, right){
            this.top = top;
            this.bottom = bottom;
            this.left = left;
            this.right = right;

            this.color = null;
        }

        checkCompleteBox(){
            if(this.top.isTaken === true && this.bottom.isTaken === true && this.left.isTaken === true && this.right.isTaken === true){
                this.color = currentPlayer.color;
            }
        }
    }

    class Player {
        constructor(name, color){
            this.name = name;
            this.color = color;
        }
    }

    line1El = document.getElementById('0');

    const line1 = new Line(0);

    const line2 = new Line(document.getElementById('1'));
    const line3 = new Line(document.getElementById('2'));
    const line4 = new Line(document.getElementById('3'));
    const line5 = new Line(document.getElementById('4'));
    const line6 = new Line(document.getElementById('5'));
    const line7 = new Line(document.getElementById('6'));
    const line8 = new Line(document.getElementById('7'));
    const line9 = new Line(document.getElementById('8'));
    const line10 = new Line(document.getElementById('9'));
    const line11 = new Line(document.getElementById('10'));
    const line12 = new Line(document.getElementById('11'));

    let player1 = new Player('ricardo', 'red');
    let player2 = new Player('groot', 'brown');

    let currentPlayer = player1;


    line1.line.addEventListener('click', function(){
        line1.isTaken = true;
        console.log(this.isTaken);
        line1.line.style.backgroundColor = currentPlayer.color;
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    });


    
});