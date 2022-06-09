import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserAdmComponent } from './add-user-adm.component';

describe('AddUserAdmComponent', () => {
  let component: AddUserAdmComponent;
  let fixture: ComponentFixture<AddUserAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
