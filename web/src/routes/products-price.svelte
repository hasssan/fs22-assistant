<script lang="ts">
	import { products } from '../data';

	function capitalizeMonths(months: string[]) {
		return months.map((month) => {
			return month[0].toLocaleUpperCase() + month.substring(1);
		});
	}
</script>

<h2 class="text-xl text-darkBrown font-bold mb-8">Sales Price by Month (Easy)</h2>

<div class="w-2/3 overflow-auto">
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
			{#each products as product}
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
