<script lang="ts">
	import products from '../data';

	import Price from '../components/price.svelte';

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

<h1 class="text-4xl mb-4">Farming Simulator 22 Assistant</h1>

<h2 class="text-3xl mb-4">Sales price by Month</h2>

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
							<div class="flex flex-col">
								<div class="text-center font-bold">
									{item.name}
									<span class="text-gray-500 text-xs align-top">
										{item.first.includes(month.name) ? '1st' : ''}
										{item.second.includes(month.name) ? '2nd' : ''}
									</span>
								</div>
								<div class="flex flex-row justify-center">
									<Price label="Avg" price={item.average} />
									<Price label="Good" price={item.good} />
									<Price label="Best" price={item.best} />
								</div>
							</div>
						</td>
					{:else}
						<td class="border" />
					{/if}
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<p>
	Credit data source: <a
		class="text-blue-600"
		href="https://www.reddit.com/r/farmingsimulator/comments/rjlmq1/fs22_average_sell_prices_v3_postgame_patch/"
	>
		FS22 Average sell prices V3 (post-game patch) by u/Edigorin
	</a>
</p>
