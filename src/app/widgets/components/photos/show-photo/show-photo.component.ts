import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { NzImageService } from 'ng-zorro-antd/image';
import { NZConfZorroService } from 'src/app/core/ng-zorro/nz-conf-zorro.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-showphoto',
  templateUrl: './show-photo.component.html',
})
export class ItemShowPhotoComponent implements OnInit, OnDestroy {
  @Input() idImg = '';
  @Input() alt = '';
  constructor(
    private nzImageService: NzImageService,
    public nzZorro: NZConfZorroService
  ) {}
  ngOnDestroy(): void {}
  ngOnInit(): void {}
  showImg(): void {
    let url = '';
    if (!this.idImg) {
      url = 'photo/icon-72x72.png';
    } else {
      url = 'imagen/' + this.idImg;
    }
    const images = [
      {
        src: environment.apiFile + url,
        width: '300px',
        height: '300px',
        alt: this.alt,
      },
    ];
    this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
  }
}
