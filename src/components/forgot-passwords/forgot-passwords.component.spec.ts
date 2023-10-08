import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordsComponent } from './forgot-passwords.component';

describe('ForgotPasswordsComponent', () => {
  let component: ForgotPasswordsComponent;
  let fixture: ComponentFixture<ForgotPasswordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotPasswordsComponent]
    });
    fixture = TestBed.createComponent(ForgotPasswordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
