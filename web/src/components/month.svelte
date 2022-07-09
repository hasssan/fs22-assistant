<script lang="ts">
	import type { Months } from '../types';
	import ProductComponent from '../components/product.svelte';
	import CropComponent from '../components/crop.svelte';

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
	{#if month.name != '-'}
		<div class="mb-3 mx-3 rounded-md bg-darkSeaGreen ">
			<div class="text-center py-1 cursor-pointer" on:click={() => selectMenu('crop')}>Crops</div>
			{#if selectedMenu == 'crop'}
				<div class="pb-1">
					<div class="mt-3 bg-darkSeaGreen">
						<div class="text-center font-bold">Plant</div>
						<div class="flex flex-wrap">
							{#if month?.plants?.length}
								{#each month?.plants as item}
									<div class="w-1/2">
										<CropComponent name={item.name} />
									</div>
								{/each}
							{/if}
						</div>
					</div>
					<div class="my-3 bg-goldCrayola">
						<div class="text-center font-bold">Harvest</div>
						<div class="flex flex-wrap">
							{#if month?.harvests?.length}
								{#each month?.harvests as item}
									<div class="w-1/2">
										<CropComponent name={item.name} />
									</div>
								{/each}
							{/if}
						</div>
					</div>
				</div>
			{/if}
		</div>
	{/if}
</div>
