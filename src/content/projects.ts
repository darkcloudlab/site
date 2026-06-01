export type Project = {
	title: string;
	type: string;
	slug: string;
	date?: string;
	summary: string;
	repoUrl?: string;
	liveUrl?: string;
	stack?: string[];
};

export const projects: Project[] = [
	{
		title: 'Thrive Pilot',
		type: 'Next.js + Supabase + Twilio + Garmin',
		slug: 'thrive-pilot',
		date: '2026',
		summary:
			'A Next.js pilot platform for a coaching program: admin-managed onboarding (invite → consent), secure mentor ↔ participant messaging (Twilio SMS + inbound/status webhooks), and Garmin data ingestion (OAuth connect + Health API webhooks). Built on Supabase Auth + RLS with a weekly report pipeline and background email queue.',
		repoUrl: 'https://github.com/heal3-dev/thrive-pilot',
		liveUrl: 'https://thrive-pilot.vercel.app',
		stack: [
			'Next.js',
			'TypeScript',
			'Supabase (Auth + RLS)',
			'Twilio',
			'Garmin Health API',
			'Resend',
			'OpenAI',
			'Sentry',
			'Vercel',
		],
	},
];

