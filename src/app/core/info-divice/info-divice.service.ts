import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InfoDiviceService {
  Exp_DiviceType: RegExp =
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Mobile|mobile|CriOS|Windows Phone|Windows/;
  appCodeName: string | undefined | null;
  appVersion: string | undefined | null;
  language: string | undefined | null;
  languages: ReadonlyArray<string> = [];
  platform: string | undefined | null;
  sytemOperaty: string | undefined | null;
  sytemtype: string | undefined | null;
  sytemVersion: string | undefined | null;
  nameDivice: string | undefined | null;
  browsetVersion: string | undefined | null;
  isMovil: boolean | undefined | null;
  divice: string | undefined | null;

  constructor() {}

  public infoDivice() {
    console.log('test info');
    this.language = navigator.language;
    this.languages = navigator.languages;
    this.isDiviceMovil();
    this.browsetType();
  }
  public isDiviceMovil(): boolean {
    return navigator.userAgent.toLowerCase().indexOf('mobile') > -1
      ? true
      : false;
  }
  public browsetType(): void {
    if (navigator.userAgent.toLowerCase().indexOf('safari')) {
      this.sytemOperaty = 'Safari';
      return;
    } else if (navigator.userAgent.toLowerCase().indexOf('chrome')) {
      this.sytemOperaty = 'Chrome';
      return;
    } else if (navigator.userAgent.toLowerCase().indexOf('opera')) {
      this.sytemOperaty = 'Opera';
      return;
    } else if (navigator.userAgent.toLowerCase().indexOf('firefox')) {
      this.sytemOperaty = 'Firefox';
      return;
    } else if (navigator.userAgent.indexOf('MSIE')) {
      this.sytemOperaty = 'Internet Explorer';
      return;
    } else {
      return;
    }
  }
}
