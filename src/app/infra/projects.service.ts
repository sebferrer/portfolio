import { Injectable } from '@angular/core';
import * as PROJECTS_JSON from './static-projects.json';
import { IProjectOverview, IProject } from '../models';

const PROJECTS: IProject[] = (PROJECTS_JSON as any).default;
const IMG_DIR = 'assets/img/';

@Injectable()
export class ProjectsService {

	constructor() { }

	public getProjectOverviews(): IProjectOverview[] {
		return PROJECTS.map(project => {
			project.picture = IMG_DIR + project.picture;
			return project
		});
	}

	public getProject(id: string): IProject | null {
		return PROJECTS.find(project => project.id === id) || null;
	}

}