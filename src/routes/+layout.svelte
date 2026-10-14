<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import '../app.css';
	import '../app.scss';
	import 'lenis/dist/lenis.css';
	import Preloader from '$lib/components/Preloader/index.svelte';
	import Cursor from '$lib/components/Cursor.svelte';
	import SlideTooltip from '$lib/components/SlideTooltip.svelte';
	import LandscapeOverlay from '$lib/components/LandscapeOverlay.svelte';
	import { showPreloader } from '$lib/store.svelte';

	let { children } = $props();
	// The /_octagon showreel route mounts its own isolated scene and never drives
	// the global loading progress, so the shared Preloader/Cursor/UI are suppressed
	// there (otherwise the Preloader would block the page forever). The static
	// /privacy-policy route has the same constraint — it never loads the scene.
	let hideUI = $derived(
		page.url.searchParams.get('hideUI') === 'true' ||
			page.url.pathname.startsWith('/_octagon') ||
			page.url.pathname.startsWith('/privacy-policy')
	);

	const siteUrl = 'https://devclub.nst.rishihood.edu.in';
	const siteName = 'Dev Club NST — Newton School of Technology';
	const defaultDescription =
		'Dev Club at Newton School of Technology (NST) — fostering innovation, full-stack engineering, AI/ML, open source, and web3 development led by Aryan Vibhuti.';
	const socialImage = `${siteUrl}/og-image.jpg`;
	const canonicalUrl = $derived(new URL(page.url.pathname, siteUrl).toString());
	const robotsContent = $derived(
		page.status >= 400 || page.url.pathname.startsWith('/_octagon')
			? 'noindex, nofollow'
			: 'index, follow, max-image-preview:large'
	);
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'EducationalOrganization',
		name: 'Dev Club NST',
		url: siteUrl,
		logo: `${siteUrl}/favicon.svg`,
		image: socialImage,
		description: defaultDescription,
		foundingDate: '2023',
		areaServed: 'NST',
		founder: {
			'@type': 'Person',
			name: 'Aryan Vibhuti'
		},
		sameAs: [
			'https://github.com/devclub-nstru',
			'https://www.linkedin.com/company/dev-club-nstru/',
			'https://x.com/devclub_nstru',
			'https://discord.gg/devclub-nstru'
		],
		knowsAbout: [
			'Full Stack Web & Mobile Development',
			'Artificial Intelligence & Machine Learning',
			'System Architecture & DevOps',
			'Open Source Software',
			'Competitive Programming',
			'Web3 & Distributed Systems'
		]
	};
	const structuredDataJson = JSON.stringify(structuredData).replaceAll('<', '\\u003c');

	// Progressive enhancement: use View Transitions API when available
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="canonical" href={canonicalUrl} />
	<link rel="manifest" href="/site.webmanifest" />

	<title>{siteName}</title>
	<meta name="description" content={defaultDescription} />
	<meta name="author" content="Aryan Vibhuti | Dev Club NST" />
	<meta name="robots" content={robotsContent} />

	<meta property="og:title" content={siteName} />
	<meta property="og:description" content={defaultDescription} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:site_name" content="Dev Club NST" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:image" content={socialImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Dev Club NST — Code, Create, Innovate" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={siteName} />
	<meta name="twitter:description" content={defaultDescription} />
	<meta name="twitter:image" content={socialImage} />
	<meta name="twitter:image:alt" content="Dev Club NST — Code, Create, Innovate" />

	{@html `<script type="application/ld+json">${structuredDataJson}</script>`}
</svelte:head>

{#if !hideUI}
	<Cursor />
	<SlideTooltip />
	<Preloader />
	<LandscapeOverlay />
{/if}

<div
	class="site-shell"
	inert={!hideUI && $showPreloader}
	aria-hidden={!hideUI && $showPreloader}
>
	{@render children()}
</div>
