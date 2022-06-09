import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-button-send',
  template: `
    <button nz-button nzType="primary" type="submit" [disabled]="disabled">
      send
    </button>
  `,
})
export class ItemButtonSendComponent implements OnInit {
  @Input() disabled: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
