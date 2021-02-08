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

    let player1 = new Player('ricardo', 'pink');
    let player2 = new Player('groot', 'orange');

    let currentPlayer = player1;

    line1.line.addEventListener('click', function(){
        if(line1.isTaken === false){
            line1.isTaken = true;
            line1.line.style.backgroundColor = currentPlayer.color;
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        }
    });

    line2.line.addEventListener('click', function(){
        if(line2.isTaken === false){
            line2.isTaken = true;
            line2.line.style.backgroundColor = currentPlayer.color;
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        }
    });

    line3.line.addEventListener('click', function(){
        if(line3.isTaken === false){
            line3.isTaken = true;
            line3.line.style.backgroundColor = currentPlayer.color;
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        }
    });

    line4.line.addEventListener('click', function(){
        if(line4.isTaken === false){
            line4.isTaken = true;
            line4.line.style.backgroundColor = currentPlayer.color;
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        }
    });

    line5.line.addEventListener('click', function(){
        if(line5.isTaken === false){
            line5.isTaken = true;
            line5.line.style.backgroundColor = currentPlayer.color;
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        }
    });

    line6.line.addEventListener('click', function(){
        if(line6.isTaken === false){
            line6.isTaken = true;
            line6.line.style.backgroundColor = currentPlayer.color;
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        }
    });

    line7.line.addEventListener('click', function(){
        if(line7.isTaken === false){
            line7.isTaken = true;
            line7.line.style.backgroundColor = currentPlayer.color;
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        }
    });

    line8.line.addEventListener('click', function(){
        if(line8.isTaken === false){
            line8.isTaken = true;
            line8.line.style.backgroundColor = currentPlayer.color;
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        }
    });

    line9.line.addEventListener('click', function(){
        if(line9.isTaken === false){
            line9.isTaken = true;
            line9.line.style.backgroundColor = currentPlayer.color;
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        }
    });

    line10.line.addEventListener('click', function(){
        if(line10.isTaken === false){
            line10.isTaken = true;
            line10.line.style.backgroundColor = currentPlayer.color;
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        }
    });

    line11.line.addEventListener('click', function(){
        if(line11.isTaken === false){
            line11.isTaken = true;
            line11.line.style.backgroundColor = currentPlayer.color;
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        }
    });

    line12.line.addEventListener('click', function(){
        if(line12.isTaken === false){
            line12.isTaken = true;
            line12.line.style.backgroundColor = currentPlayer.color;
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        }
    });


    
});