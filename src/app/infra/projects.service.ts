import { Injectable } from '@angular/core';
import * as PROJECTS_JSON from './static-projects.json';
import { IProjectOverview, IProject } from '../models';

const PROJECTS: IProject[] = (PROJECTS_JSON as any).default;
const PROJECTS_IMG_DIR = 'assets/img/projects/';
const TECHNOS_IMG_DIR = 'assets/img/technos/';

const DEFAULT_PROJECT = {
	id: 'default',
	name: 'Empty result',
	picture: '',
	headLine: '',
	technos: [],
	links: [],
	description: ''
}

const URL_TYPE_IMG_MAP = new Map<string, string>([
	['website', 'website.png'],
	['playstore', 'playstore.png'],
	['github', 'github.png'],
	['codepen', 'codepen.png']
]);

@Injectable()
export class ProjectsService {

	constructor() { }

	public getProjectOverviews(): IProjectOverview[] {
		return PROJECTS.map(project => {
			project.picture = PROJECTS_IMG_DIR + project.picture;
			return project
		});
	}

	public getProject(id: string): IProject {
		return PROJECTS.find(project => project.id === id) || DEFAULT_PROJECT;
	}

	public getUrlTypeImgMap(): Map<string, string> {
		const newMap = new Map(URL_TYPE_IMG_MAP);
		Array.from(newMap).map(([key, value]) => {
			newMap.set(key, TECHNOS_IMG_DIR + newMap.get(key));
		});
		return newMap;
	}

}