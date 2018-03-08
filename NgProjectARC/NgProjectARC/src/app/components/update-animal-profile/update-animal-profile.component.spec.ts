import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnimalProfileComponent } from './update-animal-profile.component';

describe('UpdateAnimalProfileComponent', () => {
  let component: UpdateAnimalProfileComponent;
  let fixture: ComponentFixture<UpdateAnimalProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAnimalProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAnimalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
