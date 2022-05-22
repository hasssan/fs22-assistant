<script lang="ts">
	import type { Product } from '../data';

	import Price from '../components/price.svelte';

	export let product: Product;
	export let monthName: string;

	let shown: boolean = false;

	function show() {
		shown = !shown;
	}
</script>

<div class="flex flex-col mx-1">
	<div class="text-center font-bold">
		{product.name}
		<span
			class="{product.first.includes(monthName)
				? 'text-green-600'
				: 'text-amber-500'} text-xs align-top"
		>
			{product.first.includes(monthName) ? '1st' : ''}
			{product.second.includes(monthName) ? '2nd' : ''}
		</span>
	</div>
	<button class="py-1 text-cyan-500 text-xs underline" on:click={show}
		>{shown ? 'Hide' : 'Show'} Price</button
	>
	{#if shown}
		<div class="flex flex-col justify-center">
			<Price label="Avg" price={product.average} />
			<Price label="Good" price={product.good} />
			<Price label="Best" price={product.best} />
		</div>
	{/if}
</div>
