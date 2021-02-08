export interface IProjectOverview {
	id: string;
	name: string;
	picture: string;
	headLine: string;
	technos: string[];
}

export interface IProject extends IProjectOverview {
	description: string;
}