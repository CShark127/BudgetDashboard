import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionIconComponent } from './institution-icon.component';

describe('InstitutionIconComponent', () => {
  let component: InstitutionIconComponent;
  let fixture: ComponentFixture<InstitutionIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstitutionIconComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
