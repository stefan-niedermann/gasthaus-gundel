import { MatButtonModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatInputModule } from '@angular/material';
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
		fixture = TestBed.createComponent(ImpressumComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
