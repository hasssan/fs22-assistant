<script lang="ts">
	import { products } from '../../data';

	function capitalizeMonths(months: string[]) {
		return months.map((month) => {
			return month[0].toLocaleUpperCase() + month.substring(1);
		});
	}

	let filterProduct = '';

	$: filteredList = products.filter(
		(product) => product.name.toLowerCase().indexOf(filterProduct.toLowerCase()) !== -1,
	);
</script>

<h2 class="text-xl text-darkBrown font-bold mb-8">Sales Price by Month (Easy)</h2>

<div class="w-2/3 overflow-auto">
	<div class="pb-4">
		<label for="table-search" class="sr-only">Search</label>
		<div class="relative mt-1">
			<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
				<svg
					class="w-5 h-5 text-gray-500 dark:text-gray-400"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clip-rule="evenodd"
					/></svg
				>
			</div>
			<input
				type="text"
				id="table-search"
				class="block p-2 pl-10 w-80 text-sm text-green-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-darkSeaGreen focus:border-darkSeaGreen"
				placeholder="Filter by Product"
				bind:value={filterProduct}
			/>
		</div>
	</div>

	<table class="table-auto w-full text-left whitespace-no-wrap">
		<thead>
			<tr class="text-green-800 bg-darkSeaGreen">
				<th class="py-2 px-4">Product</th>
				<th class="py-2 px-4">Best</th>
				<th class="py-2 px-4">Good</th>
				<th class="py-2 px-4">Average</th>
				<th class="py-2 px-4">Month 1st</th>
				<th class="py-2 px-4">Month 2nd</th>
			</tr>
		</thead>
		<tbody>
			{#each filteredList as product}
				<tr class="border-b border-darkSeaGreen">
					<td class="px-6 py-1">{product.name}</td>
					<td class="px-6 py-1">{product.best}</td>
					<td class="px-6 py-1">{product.good}</td>
					<td class="px-6 py-1">{product.average}</td>
					<td class="px-6 py-1">{capitalizeMonths(product.first).join(', ')}</td>
					<td class="px-6 py-1">{capitalizeMonths(product.second).join(', ')}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
