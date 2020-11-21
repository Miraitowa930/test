import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vg6DemoComponent } from './vg6-demo.component';

describe('Vg6DemoComponent', () => {
  let component: Vg6DemoComponent;
  let fixture: ComponentFixture<Vg6DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vg6DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vg6DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
