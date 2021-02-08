import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/infra';
import { IProjectOverview } from 'src/app/models';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public projects = new Array<IProjectOverview>();

	constructor(
		private projectsService: ProjectsService
	) { }

	public ngOnInit(): void {
		this.projects = this.projectsService.getProjectOverviews();
	}
}
