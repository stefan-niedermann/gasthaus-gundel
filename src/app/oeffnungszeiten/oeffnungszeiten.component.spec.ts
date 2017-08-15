import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OeffnungszeitenComponent } from './oeffnungszeiten.component';

describe('OeffnungszeitenComponent', () => {
  let component: OeffnungszeitenComponent;
  let fixture: ComponentFixture<OeffnungszeitenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OeffnungszeitenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OeffnungszeitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
