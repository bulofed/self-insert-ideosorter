<script>
import Moon from '$lib/icons/Moon.svelte';
import Sun from '$lib/icons/Sun.svelte';
import { browser } from '$app/environment';

let darkMode = true;

function handleSwitchDarkMode() {
	darkMode = !darkMode;

	localStorage.setItem('theme', darkMode ? 'dark' : 'light');

	darkMode
		? document.documentElement.classList.add('dark')
		: document.documentElement.classList.remove('dark');
}

if (browser) {
	if (
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.classList.add('dark');
		darkMode = true;
	} else {
		document.documentElement.classList.remove('dark');
		darkMode = false;
	}
}
</script>

<button onclick={handleSwitchDarkMode} class="bg-slate-300 dark:bg-slate-800 dark:text-white rounded-full p-2">
	<!-- Workaround to not get FOUC -->
	<Sun class="size-8 hidden dark:block" />
	<Moon class="size-8 block dark:hidden" />
</button>