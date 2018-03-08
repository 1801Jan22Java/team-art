import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAnimalFormComponent } from './register-animal-form.component';

describe('RegisterAnimalFormComponent', () => {
  let component: RegisterAnimalFormComponent;
  let fixture: ComponentFixture<RegisterAnimalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAnimalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAnimalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
