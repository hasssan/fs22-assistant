<script lang="ts">
	import products from '../data';

	import Product from '../components/product.svelte';

	const monthData: { [key: string]: { [key: string]: any } } = {
		jan: { name: 'Jan', products: [] },
		feb: { name: 'Feb', products: [] },
		mar: { name: 'Mar', products: [] },
		apr: { name: 'Apr', products: [] },
		may: { name: 'May', products: [] },
		jun: { name: 'Jun', products: [] },
		jul: { name: 'Jul', products: [] },
		aug: { name: 'Aug', products: [] },
		sep: { name: 'Sep', products: [] },
		oct: { name: 'Oct', products: [] },
		nov: { name: 'Nov', products: [] },
		dec: { name: 'Dec', products: [] },
		'-': { name: '-', products: [] },
	};

	const months: any[] = Object.values(monthData);

	for (const key in monthData) {
		const productOfMonth = products.filter((p) => p.months?.includes(key));
		monthData[key].products = productOfMonth;
		monthData[key].name_lower = monthData[key].name.toLowerCase();
	}
</script>

<svelte:head>
	<title>Farming Simulator 22 Assistant</title>
	<meta
		name="description"
		content="Useful Farming Simulator 22 Assistant to help you enjoy farming"
	/>
</svelte:head>

<h1 class="text-4xl mb-4">Farming Simulator 22 Assistant</h1>

<h2 class="text-3xl">Sales Price by Month (Easy)</h2>

<div class="flex flex-wrap justify-between">
	{#each months as month}
		<div class="w-28">
			<div class="text-center font-bold">
				{month.name}
			</div>
			<div class="text-center">
				{#each monthData[month.name_lower].products as product}
					<Product {product} monthName={month.name_lower} />
				{/each}
			</div>
		</div>
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

<!-- <table class="table-fixed border">
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
</table> -->
