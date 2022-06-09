import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-block',
  template: `
    <div class="trigger-item" (click)="toggle()">
      <i nz-icon nzType="lock" nzTheme="outline"></i>
    </div>
  `,
})
export class ItemBlockComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  toggle(): void {}
}
