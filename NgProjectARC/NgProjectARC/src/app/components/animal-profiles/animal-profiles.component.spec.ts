import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalProfilesComponent } from './animal-profiles.component';

describe('AnimalProfilesComponent', () => {
  let component: AnimalProfilesComponent;
  let fixture: ComponentFixture<AnimalProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
