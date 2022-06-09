import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exception-404',
  template: ` <nz-result
    nzStatus="404"
    nzTitle="404"
    nzSubTitle="Sorry, the page you visited does not exist."
  >
    <div nz-result-extra>
      <button nz-button nzType="primary">Back Home</button>
    </div>
  </nz-result>`,
})
export class ItemException404Component implements OnInit {
  ngOnInit(): void {}
}
