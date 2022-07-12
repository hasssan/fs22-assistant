<script>
	import NavigationComponent from '../components/navigation.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Farming Simulator 22 Assistant</title>
	<meta
		name="description"
		content="Useful Farming Simulator 22 Assistant to help you enjoy farming"
	/>
</svelte:head>

<div class="container mx-auto my-4">
	<NavigationComponent />
	<slot />
</div>
