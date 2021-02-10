import { Component } from '@angular/core';
import { ILuModalContent } from '@lucca-front/ng/modal';

@Component({
	selector: 'app-project-modal',
	templateUrl: 'project-modal.component.html'
})
export class ProjectModalComponent implements ILuModalContent {
	title = 'titre';

	constructor(
	) {

	}

}
