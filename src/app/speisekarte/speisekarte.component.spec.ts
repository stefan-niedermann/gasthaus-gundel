import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatInputModule } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeisekarteComponent } from './speisekarte.component';
import { AppService } from 'app/app.service';
import { SpeisekarteService } from 'app/speisekarte/speisekarte.service';

describe('SpeisekarteComponent', () => {
	let component: SpeisekarteComponent;
	let fixture: ComponentFixture<SpeisekarteComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SpeisekarteComponent],
			imports: [
				MatButtonModule,
				MatCardModule,
				MatToolbarModule,
				MatSidenavModule,
				MatIconModule,
				MatListModule,
				MatMenuModule,
				MatInputModule,
				BrowserAnimationsModule
			],
			providers: [
				SpeisekarteService,
				{
					provide: AppService,
					useClass: AppService
				}
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SpeisekarteComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
