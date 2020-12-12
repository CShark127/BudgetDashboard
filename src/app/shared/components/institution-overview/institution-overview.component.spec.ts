import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionOverviewComponent } from './institution-overview.component';

describe('InstitutionOverviewComponent', () => {
  let component: InstitutionOverviewComponent;
  let fixture: ComponentFixture<InstitutionOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
