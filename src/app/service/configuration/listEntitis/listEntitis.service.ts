import { Injectable, EventEmitter } from '@angular/core';
import { Paginated } from '@feathersjs/feathers';

@Injectable({
  providedIn: 'root',
})
export class ListEntitisService {
  public setOfCheckedId = new Set<string>(); // list id
  public checked = false; // select item
  public list: Array<any> = []; // list all item
  public listIdSelect: string[] = []; // list item select
  public indeterminate = false;
  public isListEmpty: EventEmitter<boolean> = new EventEmitter();
  public listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      },
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.list.forEach((data, index) =>
          this.updateCheckedSet(data?._id!, index % 2 !== 0)
        );
        this.refreshCheckedStatus();
      },
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.list.forEach((data, index) =>
          this.updateCheckedSet(data?._id!, index % 2 === 0)
        );
        this.refreshCheckedStatus();
      },
    },
  ];
  public allData: number = 0;
  public limit: number = 10;
  public skip: number = 0;
  public pageIndex: number = 1;
  public initLoading: boolean = false;

  constructor() { }

  onItemChecked(id: string, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.list.forEach((item: any) => this.updateCheckedSet(item?._id!, value));
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.list.every((item: any) =>
      this.setOfCheckedId.has(item?._id!)
    );
    this.indeterminate =
      this.list.some((item: any) => this.setOfCheckedId.has(item?._id!)) &&
      !this.checked;
  }

  checkedList(data: Paginated<any>): void {
    if (data.total === 0) {
      this.list = [];
      this.allData = 0;
      this.initLoading = false;
      return;
    }
    if (data.total >= 1 && data.data.length === 0) {
      this.isListEmpty.emit(true);
      return;
    }
    this.list = data.data;
    this.allData = data.total;
    this.initLoading = false;
  }

  private updateCheckedSet(id: string, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
      this.listIdSelect.push(id);
    } else {
      this.setOfCheckedId.delete(id);
      this.clearIdDelete(id);
    }
  }

  async clearSetIdDelete(): Promise<void> {
    await Promise.all([
      (this.indeterminate = false),
      (this.checked = false),
      this.setOfCheckedId.forEach((m) => this.setOfCheckedId.delete(m)),
      this.listIdSelect.forEach(() => this.listIdSelect.pop()),
    ]);
  }

  private clearIdDelete(id: string): void {
    let cont = 0;
    for (const item of this.listIdSelect) {
      if (item === id) {
        this.listIdSelect.splice(cont, 1);
        break;
      }
      cont++;
    }
  }
}
