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

<div
	class="flex flex-col px-1 py-1 {product.first.includes(monthName)
		? 'bg-green-400'
		: 'bg-amber-400'}"
>
	<div class="text-center font-bold text-sm">
		<span class="text-slate-800">
			{product.name}
		</span>
		<sup class="text-slate-800">
			{product.first.includes(monthName) ? '1st' : ''}
			{product.second.includes(monthName) ? '2nd' : ''}
		</sup>
	</div>
	<button class="text-blue-700 font-bold text-xs underline" on:click={show}
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
