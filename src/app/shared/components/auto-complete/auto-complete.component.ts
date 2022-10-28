import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {

  favoriteFoodFormControl!: FormControl
  foodOptions: Array<string> = [
    'pizza',
    'burger',
    'italian',
    'rice and beans',
    'meat',
    'chicken',
    'french fries',
  ]

  foodOptionsAreBeingFiltered: boolean = false
  foodOptionsFiltered$!: Observable<Array<string>>



  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this._setFormControl()
    this._setFilterVariables()
  }

  get areFoodOptionsBeingFiltered(): string {
    let message: string = 'Food options are not being filtered when you type.'
    if (this.foodOptionsAreBeingFiltered) {
      message = 'Food options are being filtered when you type.'
    }
    return message
  }

  private _setFormControl(): void {
    this.favoriteFoodFormControl = this._formBuilder.control('', [])
  }

  private _setFilterVariables(): void {
    this.foodOptionsFiltered$ = this.favoriteFoodFormControl.valueChanges
      .pipe(
        startWith(''),
        map((value: string) => {
          return this.foodOptionsAreBeingFiltered ? this.foodOptions.filter((foodOption: string) => {
            return foodOption.toLowerCase().includes(value.toLowerCase())
          }) : this.foodOptions
        })
      )
  }

}
