import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginEmpleadosPage } from './login-empleados.page';

describe('LoginEmpleadosPage', () => {
  let component: LoginEmpleadosPage;
  let fixture: ComponentFixture<LoginEmpleadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginEmpleadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
