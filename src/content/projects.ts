export type Project = {
	title: string;
	date: string;
	type: string;
	slug: string;
};

export const projects: Project[] = [
	{
		title: 'Micro SaaS - Get your business connected',
		date: '01/02/24',
		type: 'SaaS',
		slug: 'micro-saas-get-your-business-connected',
	},
	{
		title: 'Evo - Redesign of the BC Evo App',
		date: '01/02/24',
		type: 'Client',
		slug: 'evo-redesign-of-the-bc-evo-app',
	},
	{
		title: 'AI Integration - getting your AI online',
		date: '01/02/24',
		type: 'Research',
		slug: 'ai-integration-getting-your-ai-online',
	},
	{
		title: 'ChatTo',
		date: '01/02/24',
		type: 'AI (Client)',
		slug: 'chatto',
	},
	{
		title: 'Interview Prep',
		date: '01/02/24',
		type: 'AI (Client)',
		slug: 'interview-prep',
	},
];

