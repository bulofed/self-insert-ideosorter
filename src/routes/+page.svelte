<script>
	import * as m from "$lib/paraglide/messages.js"
    import LangSwitch from "$lib/components/LangSwitch.svelte";
</script>

<svelte:head>
	<title>Selfinsorter</title>
</svelte:head>

<h1>{m.hello_world({name: "Loïc"})}</h1>
<LangSwitch />