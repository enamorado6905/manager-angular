import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exception-500',
  template: `
    <nz-result
      nzStatus="500"
      nzTitle="500"
      nzSubTitle="Sorry, there is an error on server."
    >
      <div nz-result-extra>
        <button nz-button nzType="primary">Back Home</button>
      </div>
    </nz-result>
  `,
})
export class ItemException500Component implements OnInit {
  ngOnInit(): void {}
}
