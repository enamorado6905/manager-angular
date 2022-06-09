import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'yesNo',
})
export class YesNoPipe implements PipeTransform {
  constructor(private translate: TranslateService) {}
  transform(value: any, ...args: any[]): any {
    let yes: any, no: any;

    this.translate.get(`app-content.label.yes`).subscribe({
      next: (v) => (yes = v),
      error: (e) => console.error(e),
      complete: () => {},
    });

    this.translate.get(`app-content.label.no`).subscribe({
      next: (v) => (no = v),
      error: (e) => console.error(e),
      complete: () => {},
    });
    return value ? yes : no;
  }
}
