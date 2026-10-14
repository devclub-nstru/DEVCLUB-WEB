<script lang="ts">
	import { hoverSound } from '$lib/utils/hoverSound';
	import { directionalFill } from '$lib/utils/actions/directionalFill';

	const CURSOR_VISIBILITY_EVENT = 'cursor:set-hidden';

	export let theme: 'dark' | 'light' = 'light';

	function setCursorHidden(hidden: boolean) {
		if (typeof window === 'undefined') return;
		window.dispatchEvent(
			new CustomEvent(CURSOR_VISIBILITY_EVENT, {
				detail: { hidden }
			})
		);
	}

	function handleSocialHoverStart() {
		setCursorHidden(true);
	}

	function handleSocialHoverEnd() {
		setCursorHidden(false);
	}
</script>

<div class="socials socials--{theme}">
	<a
		use:hoverSound
		use:directionalFill
		href="https://github.com/devclub-nstru"
		class="social-item"
		target="_blank"
		aria-label="GitHub"
		onmouseenter={handleSocialHoverStart}
		onmouseleave={handleSocialHoverEnd}
		onfocus={handleSocialHoverStart}
		onblur={handleSocialHoverEnd}
	>
		<span class="social-item__bg"></span>
		<span class="social-item__circle-wrap" aria-hidden="true">
			<span class="social-item__circle"></span>
		</span>
		<div class="social-icon-group">
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
					fill="currentColor"
				/>
			</svg>
		</div>
	</a>

	<a
		use:hoverSound
		use:directionalFill
		href="https://www.linkedin.com/company/dev-club-nstru/"
		class="social-item"
		target="_blank"
		aria-label="LinkedIn"
		onmouseenter={handleSocialHoverStart}
		onmouseleave={handleSocialHoverEnd}
		onfocus={handleSocialHoverStart}
		onblur={handleSocialHoverEnd}
	>
		<span class="social-item__bg"></span>
		<span class="social-item__circle-wrap" aria-hidden="true">
			<span class="social-item__circle"></span>
		</span>
		<div class="social-icon-group">
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
					fill="currentColor"
				/>
			</svg>
		</div>
	</a>

	<a
		use:hoverSound
		use:directionalFill
		href="https://www.instagram.com/devclub.nstru/"
		class="social-item"
		target="_blank"
		aria-label="Instagram"
		onmouseenter={handleSocialHoverStart}
		onmouseleave={handleSocialHoverEnd}
		onfocus={handleSocialHoverStart}
		onblur={handleSocialHoverEnd}
	>
		<span class="social-item__bg"></span>
		<span class="social-item__circle-wrap" aria-hidden="true">
			<span class="social-item__circle"></span>
		</span>
		<div class="social-icon-group">
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 12 16.5a4.5 4.5 0 0 1 0-9zm0 2A2.5 2.5 0 1 0 12 14.5a2.5 2.5 0 0 0 0-5zm5.25-2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"
					fill="currentColor"
				/>
			</svg>
		</div>
	</a>
</div>

<style lang="scss">
	@use '$lib/styles/variables' as *;

	$ease-custom: cubic-bezier(0.625, 0.05, 0, 1);

	.socials {
		display: flex;
		gap: 0.5rem;
		color: #fff;

		&--dark {
			color: #000;
			@media (max-width: 1024px) {
				padding-bottom: 1rem;
				border-bottom: 1px solid #ccc;
			}
		}
	}

	.social-item {
		--button-circle-x: 50%;
		--button-circle-y: 50%;
		--button-circle-size: 160px;
		--social-fill: #fff;

		width: 3.5rem;
		aspect-ratio: 1;
		border-radius: 0.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(#fff, 0.1);
		position: relative;
		overflow: hidden;
		text-decoration: none;

		color: currentColor;

		@include breakpoint(phone) {
			width: 3.5rem;
		}

		.socials--dark & {
			background: rgba($color-grey-400, 0.1);
			--social-fill: #29292e;
		}
	}

	.social-item__bg,
	.social-item__circle-wrap {
		position: absolute;
		inset: 0;
		border-radius: inherit;
	}

	.social-item__bg {
		background: currentColor;
		opacity: 0;
		transition: opacity 0.24s ease;
		z-index: 0;
	}

	.social-item__circle-wrap {
		overflow: hidden;
		z-index: 1;
	}

	.social-item__circle {
		position: absolute;
		top: var(--button-circle-y);
		left: var(--button-circle-x);
		width: var(--button-circle-size);
		height: var(--button-circle-size);
		min-width: calc(220% + 1rem);
		min-height: calc(220% + 1rem);
		border-radius: 999px;
		background: var(--social-fill);
		transform: translate(-50%, -50%) scale(0);
		transform-origin: center;
		transition:
			transform 0.72s cubic-bezier(0.625, 0.05, 0, 1),
			width 0.72s cubic-bezier(0.625, 0.05, 0, 1),
			height 0.72s cubic-bezier(0.625, 0.05, 0, 1);
	}

	// Wrapper for SVGs
	.social-icon-group {
		position: relative;
		z-index: 2;
		display: flex;
		align-items: center;
	}

	svg {
		width: auto;
		height: 1.25rem;
		display: block;
		flex-shrink: 0;
		transition: color 0.4s ease-in-out;

		@include breakpoint(phone) {
			height: 1rem;
		}
	}

	@media (hover: hover) and (pointer: fine) {
		.social-item:hover {
			.social-item__circle {
				transform: translate(-50%, -50%) scale(1);
			}

			svg {
				color: white;
			}
		}
	}
</style>
