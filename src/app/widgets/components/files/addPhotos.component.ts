import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-addphoto',
  template: `
    <div class="avatar-uploader">
      <div
        class="ant-upload ant-upload-select ant-upload-select-picture-card ng-star-inserted"
      >
        <div
          nz-upload-btn=""
          class="ant-upload"
          tabindex="0"
          role="button"
          (click)="photoInput.click()"
        >
          <input
            type="file"
            style="display: none;"
            (change)="onPhotoSelected($event)"
            #photoInput
          />
          <img
            [src]="photoSelected || 'assets/no-image.png'"
            style="width: 100%"
            alt="No image"
          />
        </div>
      </div>
    </div>
  `,
})
export class ItemAddPhotoComponent implements OnInit {
  public loadingMusic = false;
  public file!: File;
  loading = false;
  photoSelected: any;
  @Output() nzUploadFile = new EventEmitter<File>();
  @Input('photo') set photo(value: any) {
    if (!value) {
      this.photoSelected = null;
    } else {
      this.photoSelected = environment.apiFile + 'imagen/' + value;
    }
  }
  constructor() { }

  ngOnInit(): void { }

  onPhotoSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];

      //
      const isJpgOrPng =
        this.file.type === 'image/jpeg' || this.file.type === 'image/png';
      if (!isJpgOrPng) {
        return;
      }
      const isLt2M = this.file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        return;
      }
      // image preview
      const reader = new FileReader();
      reader.onload = (e) => (this.photoSelected = reader.result);
      reader.readAsDataURL(this.file);
      console.log(this.file);
      this.nzUploadFile.emit(this.file);
    }
  }
}
