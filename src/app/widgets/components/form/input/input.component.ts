import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NzSelectModeType } from 'ng-zorro-antd/select';
import * as typeSystem from 'src/app/store/type-system';

@Component({
  selector: 'app-component-form-input',
  templateUrl: './input.component.html',
})
export class ItemFormInputComponent implements OnInit {
  defaultOpenValue = new Date(0, 0, 0, 0, 0, 0);
  valueCode = '+53';
  listOfOptionCode = ['+53'];
  @Output() listOfControlAccounting: Array<{
    id: number;
    amount: string;
    color: string;
    size: string;
  }> = [];
  @Output() listOfControlPhoto: Array<{
    id: number;
    photo: string;
  }> = [];
  @Output() accounting = new EventEmitter<
    Array<{ id: number; amount: string; color: string; size: string }>
  >();
  @Output() photos = new EventEmitter<Array<{ id: number; photo: string }>>();
  @Input() data!: FormGroup;
  @Input() label!: string;
  @Input() id!: string;
  @Input() nzFormItem: 'accountingProduct' | 'photos' | 'photo' | 'default' =
    'default';
  @Input() type:
    | 'text'
    | 'email'
    | 'number'
    | 'password'
    | 'checkbox'
    | 'search' = 'text';
  @Input() placeholder!: string;
  @Input() typeNz!:
    | 'nzInput'
    | 'nzTextarea'
    | 'nzTimePicker'
    | 'nzCheckbox'
    | 'nzSelectnumber'
    | 'nzSelect'
    | 'nzSelectEntiti';
  @Input() typeEntiti!: typeSystem.typeEntitis;
  @Input() typeSelect!: NzSelectModeType;
  @Input() listOfSelect: Array<any> = [];
  @Input() notShowLabel: boolean = false;
  @Input() isrequired: boolean = false;
  @Input() isautofocus: boolean = false;
  @Input() isdisabled: boolean = true;
  @Input() nzHasFeedback: boolean = true;
  @Input() placeholderRequired!: string;
  @Input() placeholderPattern!: string;
  @Input() placeholderMinlength!: string;
  @Input() placeholderMaxlength!: string;
  get value(): AbstractControl | null {
    return this.data.get(this.id);
  }
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    if (this.nzFormItem === 'accountingProduct') {
      this.addFieldAccounting();
    } else if (this.nzFormItem === 'photos') {
      this.addFieldPhoto();
    }
  }
  removeFieldAccounting(
    i: { id: number; amount: string; color: string; size: string },
    e: MouseEvent
  ): void {
    e.preventDefault();
    if (this.listOfControlAccounting.length > 1) {
      const index = this.listOfControlAccounting.indexOf(i);
      this.listOfControlAccounting.splice(index, 1);
      this.data.removeControl(i.amount);
      this.data.removeControl(i.color);
      this.data.removeControl(i.size);
    }
  }
  addFieldAccounting(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id =
      this.listOfControlAccounting.length > 0
        ? this.listOfControlAccounting[this.listOfControlAccounting.length - 1]
            .id + 1
        : 0;

    const control = {
      id,
      amount: `amount_${id}`,
      color: `color_${id}`,
      size: `size_${id}`,
    };
    const index = this.listOfControlAccounting.push(control);
    this.data.addControl(
      this.listOfControlAccounting[index - 1].amount,
      new FormControl(null, [Validators.required])
    );
    this.data.addControl(
      this.listOfControlAccounting[index - 1].color,
      new FormControl(null, [Validators.required])
    );
    this.data.addControl(
      this.listOfControlAccounting[index - 1].size,
      new FormControl(null, [Validators.required])
    );
    this.accounting.emit(this.listOfControlAccounting);
  }
  removeFieldPhoto(i: { id: number; photo: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControlPhoto.length > 1) {
      const index = this.listOfControlPhoto.indexOf(i);
      this.listOfControlPhoto.splice(index, 1);
      this.data.removeControl(i.photo);
    }
  }
  addFieldPhoto(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id =
      this.listOfControlPhoto.length > 0
        ? this.listOfControlPhoto[this.listOfControlPhoto.length - 1].id + 1
        : 0;

    const control = {
      id,
      photo: `photo_${id}`,
    };
    const index = this.listOfControlPhoto.push(control);
    this.data.addControl(
      this.listOfControlPhoto[index - 1].photo,
      new FormControl(null, [])
    );
    this.photos.emit(this.listOfControlPhoto);
  }
}
