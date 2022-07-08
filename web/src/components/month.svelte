<script lang="ts">
	import type { Months } from '../types';
	import ProductComponent from '../components/product.svelte';

	type SelectedMenu = 'product' | 'crop' | '';

	export let month: Months;

	let selectedMenu: SelectedMenu = '';

	function selectMenu(menu: SelectedMenu) {
		if (menu === selectedMenu) {
			selectedMenu = '';
		} else {
			selectedMenu = menu;
		}
	}
</script>

<div class="w-72 mb-8 border-2 border-darkSeaGreen">
	<div class="mb-3 pt-1 border-b border-darkSeaGreen text-center font-bold ">
		{month.name}
	</div>
	<div class="mb-3 mx-3 rounded-md bg-darkSeaGreen">
		<div class="text-center py-1 cursor-pointer" on:click={() => selectMenu('product')}>
			Products
		</div>

		{#if selectedMenu == 'product'}
			<div class="flex flex-wrap mt-3">
				{#each month.products as product}
					<div class="w-1/2">
						<ProductComponent {product} monthName={month.name} />
					</div>
				{/each}
			</div>
		{/if}
	</div>
	<div class="mb-3 mx-3 py-1 rounded-md bg-darkSeaGreen">
		<div class="text-center cursor-pointer" on:click={() => selectMenu('crop')}>Crops</div>
		{#if selectedMenu == 'crop'}
			<div class="flex flex-wrap mt-3">
				{#each month.products as product}
					<div class="w-1/2">
						<ProductComponent {product} monthName={month.name} />
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
