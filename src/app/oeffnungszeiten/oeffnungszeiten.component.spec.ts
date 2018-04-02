import { registerLocaleData } from '@angular/common';
import { OeffnungszeitenPipe } from './oeffnungszeiten.pipe';
import { MaterialModule } from 'app/material/material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';

import { OeffnungszeitenComponent } from './oeffnungszeiten.component';
import { AppService } from 'app/app.service';

describe('OeffnungszeitenComponent', () => {

  registerLocaleData(localeDe, localeDeExtra);

  let component: OeffnungszeitenComponent;
  let fixture: ComponentFixture<OeffnungszeitenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OeffnungszeitenComponent,
        OeffnungszeitenPipe
      ],
      imports: [
        MaterialModule
      ],
      providers: [
        {
          provide: AppService,
          useClass: AppService
        }
      ]
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
