<script lang="ts">
	import products from '../data';

	import Product from '../components/product.svelte';

	const months = [
		{ name: 'Jan' },
		{ name: 'Feb' },
		{ name: 'Mar' },
		{ name: 'Apr' },
		{ name: 'May' },
		{ name: 'Jun' },
		{ name: 'Jul' },
		{ name: 'Aug' },
		{ name: 'Sep' },
		{ name: 'Oct' },
		{ name: 'Nov' },
		{ name: 'Dec' },
		{ name: '-' },
	];
</script>

<svelte:head>
	<title>Farming Simulator 22 Assistant</title>
	<meta
		name="description"
		content="Useful Farming Simulator 22 Assistant to help you enjoy farming"
	/>
</svelte:head>

<h1 class="text-4xl mb-4">Farming Simulator 22 Assistant</h1>

<h2 class="text-3xl">Sales Price by Month</h2>
<p class="mb-4">
	Credit data source: <a
		class="text-blue-600"
		href="https://www.reddit.com/r/farmingsimulator/comments/rjlmq1/fs22_average_sell_prices_v3_postgame_patch/"
	>
		FS22 Average sell prices V3 (post-game patch) by u/Edigorin
	</a>
</p>

<table class="table-fixed border">
	<thead>
		<tr>
			{#each months as item}
				<th class="border">{item.name}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each products as item}
			<tr>
				{#each months as month}
					{#if item?.months?.includes(month.name)}
						<td class="border">
							<Product product={item} monthName={month.name} />
						</td>
					{:else}
						<td class="border" />
					{/if}
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
