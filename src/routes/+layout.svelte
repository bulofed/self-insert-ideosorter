<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class="dark:bg-slate-900 dark:text-white min-h-screen">
		<ThemeSwitch />
		{@render children()}
	</div>
</ParaglideJS>
