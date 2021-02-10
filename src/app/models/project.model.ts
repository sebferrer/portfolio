import { ILink } from './link.model';

export interface IProjectOverview {
	id: string;
	name: string;
	picture: string;
	headLine: string;
	technos: string[];
}

export interface IProject extends IProjectOverview {
	links: ILink[];
	description: string;
}