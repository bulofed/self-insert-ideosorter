<script>
import Moon from '$lib/icons/Moon.svelte';
import Sun from '$lib/icons/Sun.svelte';
import { browser } from '$app/environment';

let darkMode = true;

if (browser) {
	if (localStorage.theme === 'dark') {
		darkMode = true;
	} else {
		darkMode = false;
	}
}

function handleSwitchDarkMode() {
	darkMode = !darkMode;

	localStorage.setItem('theme', darkMode ? 'dark' : 'light');

	darkMode
		? document.documentElement.classList.add('dark')
		: document.documentElement.classList.remove('dark');
}
</script>

<button onclick={handleSwitchDarkMode} class="bg-slate-300 dark:bg-slate-800 dark:text-white rounded-full p-2">
	<!-- Workaround to not get FOUC -->
	<Sun class="size-8 hidden dark:block" />
	<Moon class="size-8 block dark:hidden" />
</button>