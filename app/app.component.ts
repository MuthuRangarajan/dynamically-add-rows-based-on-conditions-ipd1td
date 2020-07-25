import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addForm: FormGroup;

  rows: FormArray;
  itemForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.addForm = this.fb.group({
      items: [null],
      items_value: ['no', Validators.required]
    });

    this.rows = this.fb.array([]);

  }

  ngOnInit() {
    
     
        this.addForm.addControl('rows', this.rows);
      
     
    
  }

 

  createItemFormGroup(): FormGroup {
    return this.fb.group({
      name: null,
     
      qty: null
    });
  }

  onSave() {
    console.log(this.rows.value)
     this.rows.push(this.createItemFormGroup());
  }

}
