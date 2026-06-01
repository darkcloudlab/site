export type Project = {
	title: string;
	type: string;
	slug: string;
	date?: string;
	summary: string;
	repoUrl?: string;
};

export const projects: Project[] = [
	{
		title: 'Thrive Pilot',
		type: 'Internal tool',
		slug: 'thrive-pilot',
		summary:
			'A bespoke internal tool pilot focused on reducing operational friction: clearer workflows, fewer handoffs, and automation where it’s safe and measurable. Built with an emphasis on usability, reliability, and maintainability.',
		repoUrl: 'https://github.com/heal3-dev/thrive-pilot',
	},
];

