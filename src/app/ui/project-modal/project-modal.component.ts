import { Component, Inject } from '@angular/core';
import { ILuModalContent, LU_MODAL_DATA } from '@lucca-front/ng/modal';
import { ProjectsService } from 'src/app/infra';
import { IProject } from 'src/app/models';

@Component({
	selector: 'app-project-modal',
	templateUrl: 'project-modal.component.html'
})
export class ProjectModalComponent implements ILuModalContent {

	title = 'titre';
	projectId: string;
	public project: IProject;
	public urlTypeImgMap: Map<string, string>;

	constructor(
		@Inject(LU_MODAL_DATA) data,
		private projectsService: ProjectsService,
	) {
		this.projectId = data;
		this.project = this.projectsService.getProject(this.projectId);
		this.title = this.project.name;
		this.urlTypeImgMap = projectsService.getUrlTypeImgMap();
	}

}
