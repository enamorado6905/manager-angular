import { Injectable } from '@angular/core';
import { NzPlacementType } from 'ng-zorro-antd/dropdown';
import { BreakpointObserver } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class NZConfZorroService {
  public clickHover: 'click' | 'hover' = 'hover';
  public positionDropdown: NzPlacementType = 'bottomRight';
  public styleDropdownNavbar: object = {
    'margin-top': '25px',
  };
  public maskClosableDrawer = true;
  public nzColumn = { xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 };
  public nzColumnSmall = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 3, xs: 1 };
  public nzWidthDrawer = 230;
  public isSmallScreen = this.breakObsrv.isMatched('(max-width: 599px)');
  public layoutChanges = this.breakObsrv.observe([
    '(orientation: portrait)',
    '(orientation: landscape)',
  ]);
  constructor(private breakObsrv: BreakpointObserver) { }
  public nzConfiguration(): void {
    if (navigator.userAgent.toLowerCase().indexOf('mobile') > -1) {
      this.clickHover = 'click';
      this.positionDropdown = 'bottomCenter';
      this.maskClosableDrawer = false;
    } else {
      this.clickHover = 'hover';
      this.positionDropdown = 'bottomRight';
    }
  }
  updateLayoutForOrientationChange(): void {
    if (this.isSmallScreen) {
      this.nzWidthDrawer = window.innerWidth;
    } else {
      this.nzWidthDrawer = 600;
    }
  }
}
