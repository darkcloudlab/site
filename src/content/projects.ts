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
		type: 'Next.js + Supabase + Twilio',
		slug: 'thrive-pilot',
		date: '2026',
		summary:
			'A Next.js pilot app for mentor ↔ participant communication, built around a secure invite + consent flow and reliable SMS messaging. Uses Supabase Auth + RLS for access control, Resend SMTP for invites, and Twilio for outbound + inbound messaging with delivery status tracking.',
		repoUrl: 'https://github.com/heal3-dev/thrive-pilot',
		liveUrl: 'https://thrive-pilot.vercel.app',
		stack: ['Next.js', 'TypeScript', 'Supabase', 'Twilio', 'Resend (SMTP)', 'Vercel'],
	},
];

