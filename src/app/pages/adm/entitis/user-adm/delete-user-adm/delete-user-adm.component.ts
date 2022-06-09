import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-user-adm',
  template: `<app-component-delete-entitis
    [entiti]="'UserAdm'"
  ></app-component-delete-entitis>`,
})
export class DeleteUserAdmComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
