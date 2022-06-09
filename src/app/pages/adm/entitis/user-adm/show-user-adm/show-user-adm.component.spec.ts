import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserAdmComponent } from './show-user-adm.component';

describe('ShowUserAdmComponent', () => {
  let component: ShowUserAdmComponent;
  let fixture: ComponentFixture<ShowUserAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUserAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUserAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
