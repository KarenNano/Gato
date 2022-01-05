import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gato';

  // States of buttons
  state1 = '';
  state2 = '';
  state3 = '';
  state4 = '';
  state5 = '';
  state6 = '';
  state7 = '';
  state8 = '';
  state9 = '';

  // Player turn
  player1 = true;

  // Keeps track of active game
  activeGame = true;

  // Name of winner
  winner = 'Gato';

  // Winning positions
  winningPositions = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

  // Player selected squares
  select1: number[] = [];
  select2: number[] = [];

  // Change state of a button when clicked
  changeState(element: string, button: number) {
    let currentState = '';
    // Set current state of game
    if (this.player1) {
      currentState = 'cross';
      document.getElementById(element)!.textContent = 'X';
      this.select1.push(button);
    }
    else {
      currentState = 'circle';
      document.getElementById(element)!.textContent = 'O';
      this.select2.push(button);
    }
    // Change class of clicked button according to current state
    switch (button) {
      case 1: this.state1 = currentState; break;
      case 2: this.state2 = currentState; break;
      case 3: this.state3 = currentState; break;
      case 4: this.state4 = currentState; break;
      case 5: this.state5 = currentState; break;
      case 6: this.state6 = currentState; break;
      case 7: this.state7 = currentState; break;
      case 8: this.state8 = currentState; break;
      case 9: this.state9 = currentState; break;
    }
    // Check if game is won
    this.checkWon();
    // Change player turn
    this.player1 = !this.player1;
  }

  // Check if game is won
  checkWon() {
    // If all buttons are clicked
    if (this.state1 !== '' && this.state2 !== '' && this.state3 !== '' && this.state4 !== '' && this.state5 !== '' && this.state6 !== '' && this.state7 !== '' && this.state8 !== '' && this.state9 !== '') {
      this.activeGame = false;
    }
    // Check states of buttons against winning positions for winner
    for (let combination of this.winningPositions) {
      // If player 1 has positions equal to some winning position, player 1 wins
      if (this.select1.includes(combination[0]) && this.select1.includes(combination[1]) && this.select1.includes(combination[2])) {
        this.activeGame = false;
        this.winner = "Jugador 1";
      }
      // If player 2 has positions equal to some winning position, player 2 wins
      else if (this.select2.includes(combination[0]) && this.select2.includes(combination[1]) && this.select2.includes(combination[2])) {
        this.activeGame = false;
        this.winner = "Jugador 2";
      }
    }
  }

  // Reset Game
  resetGame() {
    // Reset turn
    this.player1 = true;
    // Reset active game
    this.activeGame = true;
    // Reset text contents of each button
    document.getElementById('button1')!.textContent = '';
    document.getElementById('button2')!.textContent = '';
    document.getElementById('button3')!.textContent = '';
    document.getElementById('button4')!.textContent = '';
    document.getElementById('button5')!.textContent = '';
    document.getElementById('button6')!.textContent = '';
    document.getElementById('button7')!.textContent = '';
    document.getElementById('button8')!.textContent = '';
    document.getElementById('button9')!.textContent = '';
    // Reset states of each button
    this.state1 = '';
    this.state2 = '';
    this.state3 = '';
    this.state4 = '';
    this.state5 = '';
    this.state6 = '';
    this.state7 = '';
    this.state8 = '';
    this.state9 = '';
    // Reset winner
    this.winner = "Gato";
    // Reset selected squares
    this.select1 = [];
    this.select2 = [];
  }
}
