import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfAdoptionFormsComponent } from './list-of-adoption-forms.component';

describe('ListOfAdoptionFormsComponent', () => {
  let component: ListOfAdoptionFormsComponent;
  let fixture: ComponentFixture<ListOfAdoptionFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfAdoptionFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfAdoptionFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
