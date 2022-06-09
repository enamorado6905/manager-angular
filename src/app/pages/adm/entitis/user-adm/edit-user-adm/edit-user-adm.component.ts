import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NZConfZorroService } from 'src/app/core/ng-zorro/nz-conf-zorro.service';
import { UsersadmService } from 'src/app/service/entitis/usersadm/usersadm.service';
import { Observable, Subscription } from 'rxjs';
import * as valid from 'src/app/store/validators.const';
import { ComunicationEntitisService } from 'src/app/service/configuration/listEntitis/comunicationEntitis.service';
import { Url } from 'src/app/store/url';
import { IFormInput } from 'src/app/core/interfaces/component/form-input.interface';
import { IPermissionDefault } from 'src/app/core/interfaces/entitis/permission-default.interface';
import { ActivatedRoute } from '@angular/router';
import { UserAdm } from 'src/app/core/model/user-adm.model';

@Component({
  selector: 'app-edit-user-adm',
  templateUrl: './edit-user-adm.component.html',
  styleUrls: ['./edit-user-adm.component.less'],
})
export class EditUserAdmComponent implements OnInit {
  private subscription: Array<Subscription> = [];
  public data!: FormGroup;
  private id!: string;
  public observerServices!: Observable<UserAdm>;
  public changeImputData = false;

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

  constructor(
    private userAdmService: UsersadmService,
    public comunication: ComunicationEntitisService,
    public nzZorro: NZConfZorroService,
    private activatedRoute: ActivatedRoute
  ) {
    this.data = this.validatorsForm();
    this.subscription.push(
      this.comunication.subcribeLayoutChanges(),
      this.subcribeActiveRouter(),
      this.subscribe(),
      this.subcribeValueChanges()
    );
  }

  /**
   * TODO This method active when component destroy
   */
  async destroy(): Promise<void> {
    await Promise.all([
      this.comunication.deleteAllId(),
      (this.comunication.openOperation = false),
      this.subscription.forEach((sub: any) => sub.unsubscribe()),
      this.comunication.openListDate(Url.urlListAdm),
    ]);
  }

  ngOnInit(): void { }

  /**
   * TODO Observer change user adm
   * @param id
   * @returns Observable type IUserAdm
   */
  private observer(id: string): Observable<UserAdm> {
    return this.userAdmService.getUseradm$(id);
  }

  /**
   * TODO Subscription Chnage user value
   * @returns Subscription
   */
  private subcribeValueChanges(): Subscription {
    return this.data.valueChanges.subscribe(
      () => (this.changeImputData = true)
    );
  }

  /**
   * TODO Subscription Id Router
   * @returns
   */
  private subcribeActiveRouter(): Subscription {
    return this.activatedRoute.params.subscribe({
      next: async (params: any): Promise<void> => {
        this.id = params['id'] || null;
        if (!this.id) return await this.destroy();
        this.observerServices = this.observer(this.id);
        this.comunication.openOperation = true;
      },
      error: async (e): Promise<void> => {
        console.error(e);
        await this.destroy();
      },
      complete: () => console.log('complete'),
    });
  }

  /**
   * TODO Subscription user adm
   * @returns Subscription
   */
  private subscribe(): Subscription {
    return this.observerServices.subscribe({
      next: async (user: UserAdm): Promise<void> => {
        await Promise.all([
          this.data.get('name')?.setValue(user.name),
          this.data.get('nametwo')?.setValue(user.nametwo),
          this.data.get('lastnameone')?.setValue(user.lastnameone),
          this.data.get('lastnametwo')?.setValue(user.lastnametwo),
          this.data.get('email')?.setValue(user.email),
          this.data.get('active')?.setValue(user.active),
          this.getIdPermissionDefault(user.permissionDefault),
        ]);
        this.verifiedControl();
        this.changeImputData = false;
      },
      error: async (e: any): Promise<void> => {
        console.error(e);
        await this.destroy();
      },
    });
  }

  /**
   * TODO This method verified form
   */
  verifiedControl(): void {
    for (const i in this.data.controls) {
      this.data.controls[i].markAsDirty();
      this.data.controls[i].updateValueAndValidity();
      if (this.data.controls[i].invalid) {
        break;
      }
    }
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
      permissionDefault: this.data.get('permissionDefault')?.value,
      email: this.data.get('email')?.value,
      active: this.data.get('active')?.value,
    };
    this.reset();
    (await this.userAdmService.patchUserAdm$(this.id, data))
      ? (this.changeImputData = false)
      : await this.destroy();
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
   * TODO This method assing IPermissionDefault
   * @param value 
   * @returns 
   */
  private getIdPermissionDefault(value: IPermissionDefault): IPermissionDefault {
    this.data.get('permissionDefault')?.setValue(value);
    return value;
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
      permissionDefault: new FormControl(null, [Validators.required]),
      active: new FormControl(false, [Validators.required]),
    });
  }
}
