import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVisitorFormsComponent } from './manage-visitor-forms.component';

describe('ManageVisitorFormsComponent', () => {
  let component: ManageVisitorFormsComponent;
  let fixture: ComponentFixture<ManageVisitorFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageVisitorFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVisitorFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
