<script lang="ts">
	import { products } from '../data';

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

<h2 class="text-xl text-darkBrown font-bold">Sales Price by Month (Easy)</h2>

<div class="flex flex-wrap justify-between">
	{#each months as month}
		<div class="w-28">
			<div class="text-center text-darkBrown font-bold">
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
