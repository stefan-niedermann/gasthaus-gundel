import { MaterialModule } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressumComponent } from './impressum.component';

describe('ImpressumComponent', () => {
	let component: ImpressumComponent;
	let fixture: ComponentFixture<ImpressumComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ImpressumComponent],
			imports: [MaterialModule]
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
