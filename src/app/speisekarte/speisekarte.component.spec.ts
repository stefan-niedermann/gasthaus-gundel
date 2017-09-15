import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeisekarteComponent } from './speisekarte.component';

describe('SpeisekarteComponent', () => {
	let component: SpeisekarteComponent;
	let fixture: ComponentFixture<SpeisekarteComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SpeisekarteComponent],
			imports: [
				MaterialModule,
				BrowserAnimationsModule
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
