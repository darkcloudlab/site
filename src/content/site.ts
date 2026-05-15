export type Capability = {
	title: string;
	verb: string;
	description: string;
	bullets: string[];
};

export const site = {
	name: 'DarkCloudLab',
	tagline: 'Cloud systems built for overcast reality.',
	hero: {
		heading: 'Quietly powerful cloud and AI systems.',
		subheading:
			'Inspired by Vancouver’s overcast calm: minimal surfaces, clear outcomes, and engineering that holds up when the weather turns.',
		primaryCta: { label: 'Talk to us', href: '#contact' },
		secondaryCta: { label: 'What we do', href: '#services' },
	},
	proof: {
		kicker: 'Built for teams who need clarity in complex environments.',
		items: ['AI', 'Mobile', 'SaaS', 'Product', 'Design'],
	},
	about: {
		eyebrow: 'Who we are',
		title: 'A small team that ships.',
		lead:
			'Founded by two builders focused on the intersection of artificial intelligence, mobile applications, and intuitive design. We aim to create software that doesn’t just work — it delights.',
	},
	approach: {
		eyebrow: 'Approach',
		title: 'Systems thinking, not one-off fixes.',
		lead:
			'We start with your business goals, map the people and processes that touch the system, then design the architecture and delivery plan.',
		steps: [
			{
				title: 'Align',
				body: 'Define outcomes, constraints, and a shared definition of “done.”',
			},
			{
				title: 'Design',
				body: 'Model the system end-to-end: data, identity, security, operations.',
			},
			{
				title: 'Ship',
				body: 'Deliver in increments with tight feedback loops and measurable results.',
			},
		],
	},
	capabilities: {
		eyebrow: 'Services',
		title: 'What we do',
		lead:
			'We build end-to-end: from product strategy and design to engineering and AI. These are the lanes we’re best in — and we can tailor them to your context.',
		items: [
			{
				verb: 'Design',
				title: 'Product & UX systems',
				description:
					'Design language, interaction patterns, and UX that stays calm under complexity.',
				bullets: ['Design systems', 'Prototyping', 'Information architecture'],
			},
			{
				verb: 'Build',
				title: 'Mobile & web apps',
				description:
					'High-quality client experiences with the engineering foundation to scale.',
				bullets: ['React Native / Flutter', 'Web apps', 'API integrations'],
			},
			{
				verb: 'Ship',
				title: 'SaaS foundations',
				description:
					'Pragmatic SaaS architecture with clean ownership, analytics, and operational clarity.',
				bullets: ['Auth + billing', 'Observability', 'Reliable deployments'],
			},
			{
				verb: 'Integrate',
				title: 'Applied AI',
				description:
					'AI features that are useful in the real world: fast iterations, guardrails, and measurable quality.',
				bullets: ['LLM integration', 'RAG where it fits', 'Evaluation & safety'],
			},
		] satisfies Capability[],
	},
	differentiator: {
		eyebrow: 'How we work',
		title: 'Technologists on call.',
		lead:
			'You get direct access to the people building your system. No handoffs, no phone-tree support, just clear communication and accountable delivery.',
		points: [
			{
				title: 'Senior-first',
				body: 'Small teams of experienced engineers—fewer meetings, faster decisions.',
			},
			{
				title: 'Transparent delivery',
				body: 'Roadmaps, risks, and trade-offs made explicit—no surprises at launch.',
			},
			{
				title: 'Built to last',
				body: 'Documentation, monitoring, and ownership baked in from day one.',
			},
		],
	},
	contact: {
		eyebrow: 'Contact',
		title: 'Your turn.',
		lead:
			'Tell us what you’re building and where you’re stuck. We’ll reply with next steps and a concrete proposal.',
		form: {
			nameLabel: 'Your name',
			emailLabel: 'Your email',
			messageLabel: 'How can we help?',
			referralLabel: 'How did you hear about us?',
			referrals: ['LinkedIn', 'Referral', 'Web search', 'Community', 'Other'],
			submitLabel: 'Submit',
		},
	},
	footer: {
		links: [
			{ label: 'Approach', href: '#approach' },
			{ label: 'Services', href: '#services' },
			{ label: 'Contact', href: '#contact' },
		],
		legal: ['Terms', 'Privacy'],
	},
} as const;

