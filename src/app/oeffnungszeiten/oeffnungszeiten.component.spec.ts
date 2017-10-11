import { OeffnungszeitenPipe } from './oeffnungszeiten.pipe';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatInputModule } from '@angular/material';
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
				MatButtonModule,
				MatCardModule,
				MatToolbarModule,
				MatSidenavModule,
				MatIconModule,
				MatListModule,
				MatMenuModule,
				MatInputModule,
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