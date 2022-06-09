import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
})
export class ItemOperationComponent implements OnInit {
  public disabled: boolean = false;
  @Input('size') set changesize(size: number) {
    size > 1 ? (this.disabled = false) : (this.disabled = true);
  }
  isOpenShow = false;
  isOpenEdit = false;
  isOpenDelete = false;
  isOpenDeletes = false;
  @Output() emitOpenShow = new EventEmitter<boolean>();
  @Output() emitOpenEdit = new EventEmitter<boolean>();
  @Output() emitOpenDelete = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  emitShow(): void {
    this.emitOpenShow.emit(true);
  }
  emitEdit(): void {
    this.emitOpenEdit.emit(true);
  }
  emitDelete(): void {
    this.emitOpenDelete.emit(true);
  }
}
