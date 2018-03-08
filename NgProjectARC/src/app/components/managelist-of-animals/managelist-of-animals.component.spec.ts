import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagelistOfAnimalsComponent } from './managelist-of-animals.component';

describe('ManagelistOfAnimalsComponent', () => {
  let component: ManagelistOfAnimalsComponent;
  let fixture: ComponentFixture<ManagelistOfAnimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagelistOfAnimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagelistOfAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
