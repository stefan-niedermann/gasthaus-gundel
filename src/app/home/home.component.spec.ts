import { MaterialModule } from 'app/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { AppService } from 'app/app.service';
import { Angulartics2Piwik } from 'angulartics2/piwik';
import { Angulartics2Module } from 'angulartics2';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        MaterialModule,
        RouterTestingModule,
        Angulartics2Module
      ],
      providers: [
        {
          provide: AppService,
          useClass: AppService
        },
        {
          provide: Angulartics2Piwik,
          useValue: {}
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
