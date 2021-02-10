document.addEventListener("DOMContentLoaded", function(){
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

})