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

  // Names Form
  NamesForm!: FormGroup;
  player1!: FormControl;
  player2!: FormControl;

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
    this.player1 = new FormControl('', { updateOn: 'change', validators: [Validators.required] });
    this.player2 = new FormControl('', { updateOn: 'change', validators: [Validators.required] });
  }

  private createForm(): void {
    this.NamesForm = new FormGroup({
      'player1': this.player1,
      'player2': this.player2,
    });
  }

  private initializeRegistrationFormValues(): void {
    this.NamesForm.patchValue({
      player1: this.data.player1,
      player2: this.data.player2
    });
  }

  beginGame() {
    this.dialogRef.close({player1: this.player1.value, player2: this.player2.value});
  }
}
