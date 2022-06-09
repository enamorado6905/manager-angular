import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IFormInput } from 'src/app/core/interfaces/component/form-input.interface';
import { UsersadmService } from 'src/app/service/entitis/usersadm/usersadm.service';
import * as valid from 'src/app/store/validators.const';

@Component({
  selector: 'app-add-user-adm',
  templateUrl: './add-user-adm.component.html',
  styleUrls: ['./add-user-adm.component.less'],
})
export class AddUserAdmComponent implements OnInit {

  public data!: FormGroup;

  public arrayInput: Array<IFormInput> = [
    {
      label: 'validation.name.label',
      id: 'name',
      type: 'text',
      typeNz: 'nzInput',
      isrequired: true,
      isautofocus: true,
      placeholder: 'validation.name.placeholder',
      placeholderRequired: 'validation.name.required',
      placeholderPattern: 'validation.name.invalid',
      placeholderMinlength: 'validation.name.invalid_min',
      placeholderMaxlength: 'validation.name.invalid_max',
    },
    {
      label: 'validation.nametwo.label',
      id: 'nametwo',
      type: 'text',
      typeNz: 'nzInput',
      isrequired: false,
      isautofocus: false,
      placeholder: 'validation.nametwo.placeholder',
      placeholderRequired: 'validation.nametwo.required',
      placeholderPattern: 'validation.nametwo.invalid',
      placeholderMinlength: 'validation.nametwo.invalid_min',
      placeholderMaxlength: 'validation.nametwo.invalid_max',
    },
    {
      label: 'validation.lastnameone.label',
      id: 'lastnameone',
      type: 'text',
      typeNz: 'nzInput',
      isrequired: true,
      isautofocus: false,
      placeholder: 'validation.lastnameone.placeholder',
      placeholderRequired: 'validation.lastnameone.required',
      placeholderPattern: 'validation.lastnameone.invalid',
      placeholderMinlength: 'validation.lastnameone.invalid_min',
      placeholderMaxlength: 'validation.lastnameone.invalid_max',
    },
    {
      label: 'validation.lastnametwo.label',
      id: 'lastnametwo',
      type: 'text',
      typeNz: 'nzInput',
      isrequired: true,
      isautofocus: false,
      placeholder: 'validation.lastnametwo.placeholder',
      placeholderRequired: 'validation.lastnametwo.required',
      placeholderPattern: 'validation.lastnametwo.invalid',
      placeholderMinlength: 'validation.lastnametwo.invalid_min',
      placeholderMaxlength: 'validation.lastnametwo.invalid_max',
    },
    {
      label: 'validation.email.label',
      id: 'email',
      type: 'email',
      typeNz: 'nzInput',
      isrequired: true,
      isautofocus: false,
      placeholder: 'validation.email.placeholder',
      placeholderRequired: 'validation.email.required',
      placeholderPattern: 'validation.email.invalid',
    },
    {
      label: 'validation.password.label',
      id: 'password',
      type: 'password',
      typeNz: 'nzInput',
      isrequired: true,
      isautofocus: false,
      placeholder: 'validation.password.placeholder',
      placeholderRequired: 'validation.password.required',
      placeholderMinlength: 'validation.password.strength.short',
    },
    {
      label: 'validation.password.label-rep',
      id: 'password_rep',
      type: 'password',
      typeNz: 'nzInput',
      isrequired: true,
      isautofocus: false,
      placeholder: 'validation.password.placeholder',
      placeholderRequired: 'validation.password.required',
      placeholderPattern: 'validation.password.invalid',
      placeholderTwice: 'validation.password.twice',
    },
    {
      label: 'validation.permissionDefault.label',
      id: 'permissionDefault',
      typeEntiti: 'PermissionDefault',
      typeNz: 'nzSelectEntiti',
      isrequired: true,
      isautofocus: true,
      placeholder: 'validation.permissionDefault.placeholder',
      placeholderRequired: 'validation.permissionDefault.required',
    },
    {
      label: 'validation.active.label',
      id: 'active',
      type: 'checkbox',
      typeNz: 'nzCheckbox',
      isrequired: false,
      isautofocus: false,
      placeholder: 'validation.active.placeholder',
    },
  ];

  constructor(private useradmService: UsersadmService) {
    this.data = this.validatorsForm();
  }

  async ngOnInit(): Promise<void> {
    await this.reset();
  }

  /**
   * TODO This method add new admin
   */
  async sendData(): Promise<void> {
    const data = {
      name: this.data.get('name')?.value,
      nametwo: this.data.get('nametwo')?.value,
      lastnameone: this.data.get('lastnameone')?.value,
      lastnametwo: this.data.get('lastnametwo')?.value,
      password: this.data.get('password')?.value,
      permissionDefault: this.data.get('permissionDefault')?.value,
      email: this.data.get('email')?.value,
      active: this.data.get('active')?.value,
    };
    await this.useradmService.createUseradm$(data);
    await this.reset();
  }

  /**
   * TODO This method reset form
   */
  async reset(): Promise<void> {
    await Promise.all([
      this.data.reset(),
      this.data.get('active')?.setValue(true),
    ]);
  }

  /**
   * TODO This method valid form
   * @returns FormGroup
   */
  private validatorsForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(valid.email_Pattern),
      ]),
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern(valid.Names_Pattern),
        Validators.minLength(3),
        Validators.maxLength(70),
      ]),
      nametwo: new FormControl(null, [
        Validators.pattern(valid.Names_Pattern),
        Validators.minLength(3),
        Validators.maxLength(70),
      ]),
      lastnameone: new FormControl(null, [
        Validators.required,
        Validators.pattern(valid.Names_Pattern),
        Validators.minLength(3),
        Validators.maxLength(70),
      ]),
      lastnametwo: new FormControl(null, [
        Validators.required,
        Validators.pattern(valid.Names_Pattern),
        Validators.minLength(3),
        Validators.maxLength(70),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      password_rep: new FormControl(null, [
        Validators.required,
        valid.ValidatorsUser.password_EqualsValidator(),
      ]),
      permissionDefault: new FormControl(null, [Validators.required]),
      active: new FormControl(false, [Validators.required]),
    });
  }
}
