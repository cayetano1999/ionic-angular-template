import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreHomePage } from './pre-home.page';

describe('PreHomePage', () => {
  let component: PreHomePage;
  let fixture: ComponentFixture<PreHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
