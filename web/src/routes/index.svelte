<script lang="ts">
	import products from '../data';
	import type { Product } from '../data';

	import ProductComponent from '../components/product.svelte';

	const monthData: Record<string, { name: string; name_lower?: string; products: Product[] }> = {
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

	const months: { name: string; name_lower?: string; products: Product[] }[] =
		Object.values(monthData);

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

<div class="flex flex-wrap justify-between mt-6">
	{#each months as month}
		<div class="w-72 mb-8 border-2 border-darkSeaGreen">
			<div class="mb-3 pt-1 border-b border-darkSeaGreen text-center font-bold ">
				{month.name}
			</div>
			<div class="mb-3 mx-3 py-1 cursor-pointer rounded-md bg-darkSeaGreen">
				<div class="text-center">Products</div>
			</div>
			<div class="mb-3 mx-3 py-1 cursor-pointer rounded-md bg-darkSeaGreen">
				<div class="text-center">Crops</div>
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
