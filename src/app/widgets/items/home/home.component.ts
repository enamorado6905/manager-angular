import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Url } from 'src/app/store/url';

@Component({
  selector: 'app-item-home',
  template: `
    <div class="trigger-item" (click)="toggle()">
      <i nz-icon nzType="home" nzTheme="outline"></i>
    </div>
  `,
})
export class ItemHomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  toggle(): void {
    this.router.navigate([Url.welcomeAdm]);
  }
}
