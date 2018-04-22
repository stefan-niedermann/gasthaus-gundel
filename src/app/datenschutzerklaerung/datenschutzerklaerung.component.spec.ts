import { AppService } from 'app/app.service';
import { MaterialModule } from './../material/material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatenschutzerklaerungComponent } from './datenschutzerklaerung.component';

describe('DatenschutzerklaerungComponent', () => {
	let component: DatenschutzerklaerungComponent;
	let fixture: ComponentFixture<DatenschutzerklaerungComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [DatenschutzerklaerungComponent],
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
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(DatenschutzerklaerungComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});