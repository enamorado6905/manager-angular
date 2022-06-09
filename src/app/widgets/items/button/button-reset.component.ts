import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-item-button-reset',
  template: `
    <button
      nz-button
      type="button"
      nzType="primary"
      nzDanger
      [disabled]="disabled"
    >
      clear
    </button>
  `,
})
export class ItemButtonResetComponent implements OnInit {
  @Input() disabled: boolean | undefined = false;
  constructor() {}
  ngOnInit(): void {}
}
