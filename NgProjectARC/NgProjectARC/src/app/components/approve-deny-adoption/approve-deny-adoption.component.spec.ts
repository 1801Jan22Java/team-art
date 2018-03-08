import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveDenyAdoptionComponent } from './approve-deny-adoption.component';

describe('ApproveDenyAdoptionComponent', () => {
  let component: ApproveDenyAdoptionComponent;
  let fixture: ComponentFixture<ApproveDenyAdoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveDenyAdoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveDenyAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
