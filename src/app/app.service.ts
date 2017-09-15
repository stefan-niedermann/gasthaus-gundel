import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

	constructor() { }

	getSeason() {
		const month = new Date().getMonth();
		switch (month) {
			case 12:
			case 1:
			case 2:
				return 'winter';
			case 3:
			case 4:
			case 5:
				return 'spring';
			case 6:
			case 7:
			case 8:
				return 'summer';
			default:
				return 'autumn';
		}
	}
}
