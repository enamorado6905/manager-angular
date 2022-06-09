import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class ItemPaginationComponent implements OnInit {
  @Input() total = 0;
  @Output() maxItem = new EventEmitter<number>();
  @Output() itemPage = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  sizeItem(size: number): void {
    this.maxItem.emit(size);
  }
  changePageItem(item: number): void {
    this.itemPage.emit(item);
  }
}
