import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'exception-trigger',
  template: `
    <div class="pt-lg">
      <nz-card>
        <button *ngFor="let t of types" (click)="go(t)" nz-button nzDanger>
          {{ t }}
        </button>
        <button nz-button nzType="link" (click)="refresh()"></button>
      </nz-card>
    </div>
  `,
})
export class ItemExceptionTriggerComponent implements OnInit {
  ngOnInit(): void {}

  types = [401, 403, 404, 500];

  constructor() {} // @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService // private http: _HttpClient,

  go(type: number): void {
    // this.http.get(`/api/${type}`).subscribe();
  }

  refresh(): void {
    // this.tokenService.set({ token: 'invalid-token' });
    // this.http.post(`https://localhost:5001/auth`).subscribe(
    //   (res) => console.warn('成功', res),
    //   (err) => {
    //     console.log('最后结果失败', err);
    //   }
    // );
  }
}
