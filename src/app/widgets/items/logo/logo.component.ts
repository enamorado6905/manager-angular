import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-logo',
  template: `
    <a target="_blank">
      <img src="../../../assets/icons/logo.png" alt="logo" />
    </a>
  `,
})
export class ItemLogoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
