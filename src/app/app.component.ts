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

  changeState(element: any, button: number) {
    let currentState = '';
    // Set current state of game
    if (this.player1) {
      currentState = 'cross';
      element.textContent = 'X';
    }
    else {
      currentState = 'circle';
      element.textContent = 'O';
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
    // Change player turn
    this.player1 = !this.player1;
  }
}
