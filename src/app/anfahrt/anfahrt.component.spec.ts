import { MatButtonModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatInputModule } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfahrtComponent } from './anfahrt.component';
import { AppService } from 'app/app.service';

describe('AnfahrtComponent', () => {
	let component: AnfahrtComponent;
	let fixture: ComponentFixture<AnfahrtComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AnfahrtComponent],
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
		fixture = TestBed.createComponent(AnfahrtComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
