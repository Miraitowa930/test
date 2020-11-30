import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeTemplementComponent } from './tree-templement.component';

describe('TreeTemplementComponent', () => {
  let component: TreeTemplementComponent;
  let fixture: ComponentFixture<TreeTemplementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeTemplementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeTemplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
