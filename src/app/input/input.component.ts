import { Component, OnInit ,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit 
{
  public search: FormGroup;

  constructor( public dialogRef: MatDialogRef<InputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.ProdductInt()
  }

  ProdductInt()
  { 
    this.search = new FormGroup({
      
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      year: new FormControl('', [Validators.required, Validators.minLength(3)]),      
    })
  }
  
  onSubmit(search)
  { 
    this.dialogRef.close(search);
    // console.log( search.value);
  }

}