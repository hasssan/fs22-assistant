<script lang="ts">
	import type { Product } from '../types';

	import Price from '../components/price.svelte';

	export let product: Product;
	export let monthName: string;
	monthName = monthName.toLowerCase();
</script>

<div
	class="flex flex-col px-1 py-1 border border-lemonChiffon {product.first.includes(monthName)
		? 'bg-darkSeaGreen'
		: 'bg-goldCrayola'}"
>
	<div class="text-center text-slate-800 font-bold text-sm">
		<span>{product.name}</span>
		<sup>
			{product.first.includes(monthName) ? '1st' : ''}
			{product.second.includes(monthName) ? '2nd' : ''}
		</sup>
	</div>
	<div class="flex justify-center">
		<Price label="Best" price={product.best} />
		<Price label="Good" price={product.good} />
		<Price label="Avg" price={product.average} />
	</div>
</div>
