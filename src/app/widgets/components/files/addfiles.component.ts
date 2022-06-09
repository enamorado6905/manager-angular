import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-addfile',
  template: `
    <nz-descriptions
      [nzExtra]="extraTpl"
      nzBordered
      nzLayout="vertical"
      [nzColumn]="{ xxl: 4, xl: 4, lg: 4, md: 3, sm: 2, xs: 1 }"
    >
      <nz-descriptions-item
        [nzSpan]="1"
        [nzTitle]="'validation.file.name' | translate"
        >{{ file?.name! }}</nz-descriptions-item
      >
      <nz-descriptions-item
        [nzSpan]="1"
        [nzTitle]="'validation.file.size' | translate"
        >{{ file?.size! | formatFileSize: true }}</nz-descriptions-item
      >
      <nz-descriptions-item
        [nzSpan]="1"
        [nzTitle]="'validation.file.type' | translate"
        >{{ file?.type! }}</nz-descriptions-item
      >
      <nz-descriptions-item
        [nzSpan]="1"
        [nzTitle]="'validation.file.uid' | translate"
        >{{ file?.uid! }}</nz-descriptions-item
      >
    </nz-descriptions>
    <ng-template #extraTpl>
      <nz-upload [nzBeforeUpload]="beforeUpload" [nzShowUploadList]="false">
        <button type="button" nzType="primary" nz-button>
          <i nz-icon type="button" nzType="upload"></i
          >{{ 'button.upload' | translate }}
        </button>
      </nz-upload>
    </ng-template>
  `,
})
export class ItemAddFileComponent implements OnInit {
  public loadingMusic = false;
  public file: NzUploadFile | undefined;
  private type = /audio/;
  @Output() nzUploadFile = new EventEmitter<NzUploadFile>();
  @Input('reset') set Reset(value: any) {
    if (!value) {
      this.file = undefined;
      return;
    }
  }
  constructor() { }

  ngOnInit(): void { }
  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]): boolean => {
    const isJpgOrPng = this.type.test(file.type!);
    /*if (!isJpgOrPng) {
      this.message.createMessageError('You can only upload MP3 file!');
      return false;
    }*/
    const isLt2M = file.size! / 9000000 / 9000000 < 2;
    if (!isLt2M) {
      // this.message.createMessageError('Image must smaller than 9MB!');
      return false;
    }
    this.file = file;
    this.nzUploadFile.emit(file);
    return false;
  };
}
