import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'nullUndefined',
})
export class NullUndefinedPipe implements PipeTransform {
  constructor(private translate: TranslateService) {}
  transform(value: any, ...args: any[]): any {
    let isnull: any;
    let sub: any = this.translate
      .get(`app-content.label.isNullUndefined`)
      .subscribe({
        next: (v) => (isnull = v),
        error: (e) => console.error(e),
        complete: () => {},
      });
    return !value ? isnull : value;
  }
}
