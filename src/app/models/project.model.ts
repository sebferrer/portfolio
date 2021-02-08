export interface IProjectOverview {
	id: string;
	name: string;
	picture: string;
	headLine: string;
}

export interface IProject extends IProjectOverview {
	description: string;
}