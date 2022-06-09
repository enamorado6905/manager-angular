import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NzFormLayoutType } from 'ng-zorro-antd/form';
import { Subscription } from 'rxjs';
import { IFormInput } from 'src/app/core/interfaces/component/form-input.interface';
import * as typeSystem from 'src/app/store/type-system';

@Component({
  selector: 'app-item-search-value',
  templateUrl: './search-value-active-verified.component.html',
})
export class ItemSearchValueComponent implements OnInit, OnDestroy {
  private subscription: Array<Subscription> = [];
  public data!: FormGroup;
  public selectorValueSearch = [true, false];
  public nzLayout: NzFormLayoutType = 'inline';
  public arrayInput: Array<IFormInput> = [];
  public arrayInputNameVerifiedActive: Array<IFormInput> = [
    {
      label: 'validation.value.label',
      id: 'value',
      type: 'search',
      notShowLabel: true,
      typeNz: 'nzInput',
      isrequired: false,
      isautofocus: false,
      nzHasFeedback: false,
      placeholder: 'filter.names-email',
    },
    {
      label: 'validation.verified.label',
      id: 'verified',
      listOfSelect: this.selectorValueSearch,
      typeNz: 'nzSelect',
      notShowLabel: true,
      isrequired: false,
      isautofocus: false,
      nzHasFeedback: false,
      placeholder: 'filter.verified',
    },
    {
      label: 'validation.active.label',
      id: 'active',
      listOfSelect: this.selectorValueSearch,
      typeNz: 'nzSelect',
      notShowLabel: true,
      isrequired: false,
      isautofocus: false,
      nzHasFeedback: false,
      placeholder: 'filter.active',
    },
  ];
  public arrayInputValueActive: Array<IFormInput> = [
    {
      label: 'validation.value.label',
      id: 'value',
      type: 'search',
      notShowLabel: true,
      typeNz: 'nzInput',
      isrequired: false,
      isautofocus: false,
      nzHasFeedback: false,
      placeholder: 'filter.name',
    },
    {
      label: 'validation.active.label',
      id: 'active',
      listOfSelect: this.selectorValueSearch,
      typeNz: 'nzSelect',
      notShowLabel: true,
      isrequired: false,
      isautofocus: false,
      nzHasFeedback: false,
      placeholder: 'filter.active',
    },
  ];
  @Input('typeEntiti') set typeEntiti(entiti: typeSystem.typeEntitis) {
    if (entiti === 'UserAdm' || entiti === 'User') {
      this.arrayInput = this.arrayInputNameVerifiedActive;
    } else if (
      entiti === 'Rol' ||
      entiti === 'Permission' ||
      entiti === 'Category'
    ) {
      this.arrayInput = this.arrayInputValueActive;
    }
    this.arrayInputNameVerifiedActive = [];
    this.arrayInputValueActive = [];
  }
  @Output() outputValue = new EventEmitter<string>();
  @Output() outputActive = new EventEmitter<boolean>();
  @Output() outputVerified = new EventEmitter<boolean>();
  get value(): AbstractControl {
    return this.data.get('value')!;
  }
  get active(): AbstractControl {
    return this.data.get('active')!;
  }
  get verified(): AbstractControl {
    return this.data.get('verified')!;
  }
  constructor() {
    if (window.innerWidth < 430) {
      this.nzLayout = 'vertical';
    }
    this.data = this.validatorsData();
    this.subscription.push(
      this.onChangeValue(),
      this.onChangeVerified(),
      this.onChangeActive()
    );
  }
  ngOnDestroy(): void {
    this.subscription.forEach((m) => m?.unsubscribe());
  }
  ngOnInit(): void {}
  private onChangeActive(): Subscription {
    return this.active.valueChanges.subscribe(() =>
      this.outputActive.emit(this.active.value)
    );
  }
  private onChangeValue(): Subscription {
    return this.value.valueChanges.subscribe(() =>
      this.outputValue.emit(this.value.value)
    );
  }
  private onChangeVerified(): Subscription {
    return this.verified.valueChanges.subscribe(() =>
      this.outputVerified.emit(this.verified.value)
    );
  }
  private validatorsData(): FormGroup {
    return new FormGroup({
      value: new FormControl(null, []),
      active: new FormControl(null, []),
      verified: new FormControl(null, []),
    });
  }
}
