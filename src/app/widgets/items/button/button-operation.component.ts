import { Component, OnInit, Input } from '@angular/core';
import { NzButtonSize, NzButtonType } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-item-button-operation',
  template: `
    <button
      nz-button
      [nzSize]="nzSize"
      [nzType]="nzType"
      [nzDanger]="nzDanger"
      [nzBlock]="nzBlock"
      [disabled]="disabled"
    >
      <i nz-icon [nzType]="nzTypeIcon" *ngIf="nzIcon == true"></i>
      {{ text | translate }}
    </button>
  `,
})
export class ItemButtonOperationComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() nzSize: NzButtonSize = 'default';
  @Input() nzType: NzButtonType = 'primary';
  @Input() nzDanger: boolean = false;
  @Input() nzBlock: boolean = false;
  @Input() nzIcon: boolean = false;
  @Input() nzTypeIcon!: string;
  @Input() text: string = '';

  constructor() {}
  ngOnInit(): void {}
}
