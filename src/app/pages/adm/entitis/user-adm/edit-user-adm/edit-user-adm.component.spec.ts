import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserAdmComponent } from './edit-user-adm.component';

describe('EditUserAdmComponent', () => {
  let component: EditUserAdmComponent;
  let fixture: ComponentFixture<EditUserAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
