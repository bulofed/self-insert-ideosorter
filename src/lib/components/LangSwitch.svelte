<script>
    import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

	/**
	 * @param { import("$lib/paraglide/runtime").AvailableLanguageTag } newLanguage
	 */
	function switchToLanguage(newLanguage) {
		const canonicalPath = i18n.route(get(page).url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		console.log('Trying to switch to ', { localisedPath });
		goto(localisedPath);
	}
    
    /**
	 * @type {Record<import("$lib/paraglide/runtime").AvailableLanguageTag, string>}
	 */
	const labels = {
		en: '🇬🇧 English (en)',
		fr: '🇫🇷 Français (fr)',
	};
</script>

<select 
    class="px-4 py-2 rounded bg-slate-300 dark:bg-slate-800 text-black dark:text-white"
    on:change={(e) => switchToLanguage(/** @type {any} */ (e).target.value)}
>
    {#each availableLanguageTags as langTag}
        <option value={langTag} selected={languageTag() === langTag}>{labels[langTag]}</option>
    {/each}
</select>