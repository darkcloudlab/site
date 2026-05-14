export type Capability = {
	title: string;
	verb: string;
	description: string;
	bullets: string[];
};

export const site = {
	name: 'DarkCloud Lab',
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
		items: ['Architecture', 'Security', 'Migrations', 'Optimization', 'Applied AI'],
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
		title: 'Areas of focus',
		lead:
			'We go deep where reliability matters most. Pick a starting point and we’ll help you move from ambiguity to a plan you can execute.',
		items: [
			{
				verb: 'Build',
				title: 'Modern cloud foundations',
				description:
					'Design and implement nimble, scalable systems with clear ownership and clean boundaries.',
				bullets: ['Reference architectures', 'IaC & automation', 'Observability by default'],
			},
			{
				verb: 'Migrate',
				title: 'Practical migrations',
				description:
					'Move safely from legacy stacks to cloud platforms with minimal disruption.',
				bullets: ['Assessment & plan', 'Cutover strategy', 'Data migration'],
			},
			{
				verb: 'Maintain',
				title: 'Operations you can trust',
				description:
					'Keep systems secure, compliant, and resilient so your team can focus on product.',
				bullets: ['Security hardening', 'SLOs & on-call', 'Incident playbooks'],
			},
			{
				verb: 'Optimize',
				title: 'Performance & cost',
				description:
					'Balance capability with cost by tuning compute, storage, and delivery patterns.',
				bullets: ['FinOps basics', 'Caching & scaling', 'Bottleneck removal'],
			},
			{
				verb: 'Innovate',
				title: 'Applied AI',
				description:
					'Turn ideas into useful internal tools with guardrails, evals, and governance.',
				bullets: ['Workflow copilots', 'RAG foundations', 'Safety & evaluation'],
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

