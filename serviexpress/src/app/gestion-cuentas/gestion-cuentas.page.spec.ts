import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionCuentasPage } from './gestion-cuentas.page';

describe('GestionCuentasPage', () => {
  let component: GestionCuentasPage;
  let fixture: ComponentFixture<GestionCuentasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GestionCuentasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
