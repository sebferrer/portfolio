import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/infra';
import { IProjectOverview, ITechno } from 'src/app/models';
import * as TECHNOS_JSON from 'src/app/infra/static-technos.json';
import { LuModal } from '@lucca-front/ng/modal';
import { ProjectModalComponent } from '../project-modal';

const TECHNOS_IMG_DIR = 'assets/img/technos/';
const TECHNOS: ITechno[] = (TECHNOS_JSON as any).default;
const DEFAULT_TECHNO = { id: '', name: '', picture: '' };

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public projects = new Array<IProjectOverview>();
	public technos = new Array<ITechno>();

	constructor(
		private projectsService: ProjectsService,
		private _modal: LuModal
	) { }

	public ngOnInit(): void {
		this.projects = this.projectsService.getProjectOverviews();
		this.technos = [...TECHNOS].map(techno => {
			techno.picture = TECHNOS_IMG_DIR + techno.picture;
			return techno;
		});
	}

	public getTechno(technoId: string): ITechno {
		return this.technos.find(techno => techno.id === technoId) || DEFAULT_TECHNO;
	}

	public openProject(projectId: string): void {
		this._modal.open(ProjectModalComponent, projectId);
	}
}
