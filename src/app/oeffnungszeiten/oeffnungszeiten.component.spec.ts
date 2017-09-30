import { OeffnungszeitenPipe } from './oeffnungszeiten.pipe';
import { MaterialModule } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OeffnungszeitenComponent } from './oeffnungszeiten.component';
import { AppService } from 'app/app.service';

describe('OeffnungszeitenComponent', () => {
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