import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserAdmComponent } from './list-user-adm.component';

describe('ListUserAdmComponent', () => {
  let component: ListUserAdmComponent;
  let fixture: ComponentFixture<ListUserAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
