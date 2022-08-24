<script lang="ts">
	import MonthComponent from '../components/month.svelte';
	import { months } from '../stores';
</script>

<h2 class="text-xl text-darkBrown font-bold">Products & Crops (Easy)</h2>

<div class="flex flex-wrap justify-between mt-6 items-start">
	{#each months as month}
		<MonthComponent {month} />
	{/each}
</div>
