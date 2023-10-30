import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuEmpleadosPage } from './menu-empleados.page';

describe('MenuEmpleadosPage', () => {
  let component: MenuEmpleadosPage;
  let fixture: ComponentFixture<MenuEmpleadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuEmpleadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
