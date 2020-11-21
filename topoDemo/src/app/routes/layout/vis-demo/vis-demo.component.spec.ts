import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisDemoComponent } from './vis-demo.component';

describe('VisDemoComponent', () => {
  let component: VisDemoComponent;
  let fixture: ComponentFixture<VisDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
