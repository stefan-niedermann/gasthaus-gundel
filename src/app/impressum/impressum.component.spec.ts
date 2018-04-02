import { MaterialModule } from 'app/material/material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressumComponent } from './impressum.component';
import { AppService } from 'app/app.service';

describe('ImpressumComponent', () => {
  let component: ImpressumComponent;
  let fixture: ComponentFixture<ImpressumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImpressumComponent],
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
    fixture = TestBed.createComponent(ImpressumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
