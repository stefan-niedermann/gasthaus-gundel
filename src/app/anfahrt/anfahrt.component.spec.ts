import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfahrtComponent } from './anfahrt.component';

describe('AnfahrtComponent', () => {
  let component: AnfahrtComponent;
  let fixture: ComponentFixture<AnfahrtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnfahrtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnfahrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
