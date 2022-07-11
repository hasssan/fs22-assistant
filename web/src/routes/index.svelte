<script lang="ts">
	import MonthComponent from '../components/month.svelte';
	import NavigationComponent from '../components/navigation.svelte';
	import { months } from '../stores';
</script>

<svelte:head>
	<title>Farming Simulator 22 Assistant</title>
	<meta
		name="description"
		content="Useful Farming Simulator 22 Assistant to help you enjoy farming"
	/>
</svelte:head>

<NavigationComponent />

<h2 class="text-xl text-darkBrown font-bold">Calendar (Easy)</h2>

<div class="flex flex-wrap justify-between mt-6 items-start">
	{#each months as month}
		<MonthComponent {month} />
	{/each}
</div>

<div class="mb-4">
	Credit data source: <a
		class="text-blue-600"
		href="https://www.reddit.com/r/farmingsimulator/comments/rjlmq1/fs22_average_sell_prices_v3_postgame_patch/"
	>
		FS22 Average sell prices V3 (post-game patch) by u/Edigorin
	</a>
</div>
