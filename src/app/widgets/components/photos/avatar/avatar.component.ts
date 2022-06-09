import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  Input,
} from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { UnsplashPhotoService } from 'src/app/service/unsplash-photos/unsplash-photos.service';
import { IUploadPhoto } from 'src/app/core/interfaces/entitis/upload-photo.interface';
import { UploadPhoto } from 'src/app/core/model/upload-photo.model';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  animations: [
    trigger('imageAnimation', [
      state(
        'show-image',
        style({
          opacity: '1',
        })
      ),
      state(
        'hide-image',
        style({
          opacity: '0',
        })
      ),
      transition('show-image <=> hide-image', animate('500ms ease-in')),
    ]),
  ],
})
export class ItemAvatarComponent implements AfterViewInit {
  public imageCtrl = 'hide-image';
  public contentCtrl = 'show-image';
  public SRC: string | undefined;
  @ViewChild('lImage') lImage!: ElementRef;
  // Lisent imagen change.
  @Input('url') set url(url: UploadPhoto | any) {
    if (url) {
      this.SRC = environment.apiFile + 'imagens/';
      return;
    } else {
      this.SRC = environment.apiFile + 'photo/icon-72x72.png';
      return;
    }
  }
  constructor(private unsplashPhoto: UnsplashPhotoService) { }
  ngAfterViewInit(): void {
    this.imageCtrl = 'hide-image';
    this.contentCtrl = 'show-image';
    this.lImage.nativeElement.onload = () => {
      this.imageCtrl = 'show-image';
      this.contentCtrl = 'hide-image';
    };
    this.lImage.nativeElement.onerror = () => {
      this.SRC = environment.apiFile + 'photo/icon-72x72.png';
    };
  }
}
