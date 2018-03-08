import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAdoptionFormsComponent } from './manage-adoption-forms.component';

describe('ManageAdoptionFormsComponent', () => {
  let component: ManageAdoptionFormsComponent;
  let fixture: ComponentFixture<ManageAdoptionFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAdoptionFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAdoptionFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
