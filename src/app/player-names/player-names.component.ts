import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DynamicErrorStateMatcher } from '../shared/dynamicErrorStateMatcher';

@Component({
  selector: 'app-player-names',
  templateUrl: './player-names.component.html',
  styleUrls: ['./player-names.component.scss']
})
export class PlayerNamesComponent implements OnInit {

  // Multiplayer Form
  MultiplayerForm!: FormGroup;
  player1!: FormControl;
  player2!: FormControl;

  // Solo Form
  SoloForm!: FormGroup;
  soloName!: FormControl;

  public dynamicMatcher = new DynamicErrorStateMatcher();

  constructor(
    public dialogRef: MatDialogRef<PlayerNamesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
    this.initializeRegistrationFormValues();
  }

  private createFormControls(): void {
    // Multiplayer Form
    this.player1 = new FormControl('', { updateOn: 'change', validators: [Validators.required] });
    this.player2 = new FormControl('', { updateOn: 'change', validators: [Validators.required] });
    // Solo Form
    this.soloName = new FormControl('', { updateOn: 'change', validators: [Validators.required] });
  }

  private createForm(): void {
    this.MultiplayerForm = new FormGroup({
      'player1': this.player1,
      'player2': this.player2,
    });
    this.SoloForm = new FormGroup({
      'soloName': this.soloName
    })
  }

  private initializeRegistrationFormValues(): void {
    this.MultiplayerForm.patchValue({
      player1: this.data.player1,
      player2: this.data.player2
    });
    this.SoloForm.patchValue({
      soloName: this.data.player1
    })
  }

  beginGame(mode: string) {
    if (mode === 'multi')
      this.dialogRef.close({player1: this.player1.value, player2: this.player2.value, gameMode: mode});
    else
      this.dialogRef.close({player1: this.soloName.value, player2: '', gameMode: mode});
  }
}
