import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-item-button-search',
  template: `
    <button nz-button nzType="primary" [disabled]="disabled ? true : false">
      search
    </button>
  `,
})
export class ItemButtonSearchComponent implements OnInit {
  @Input() disabled: boolean | undefined = true;
  constructor() {}
  ngOnInit(): void {}
}
