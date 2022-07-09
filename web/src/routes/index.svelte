<script lang="ts">
	import MonthComponent from '../components/month.svelte';
	import { months } from '../stores';
</script>

<svelte:head>
	<title>Farming Simulator 22 Assistant</title>
	<meta
		name="description"
		content="Useful Farming Simulator 22 Assistant to help you enjoy farming"
	/>
</svelte:head>

<h1 class="text-4xl mb-4">Farming Simulator 22 Assistant</h1>

<h2 class="text-3xl">Calendar (Easy)</h2>

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
