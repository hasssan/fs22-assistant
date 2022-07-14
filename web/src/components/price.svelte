<script lang="ts">
	export let label: string;
	export let price: number;

	let bg = '';
	switch (label) {
		case 'Avg':
			bg = 'bg-teal-200';
			break;
		case 'Good':
			bg = 'bg-amber-200';
			break;
		case 'Best':
			bg = 'bg-green-200';
			break;
	}
</script>

<div class="flex flex-col py-1 w-full text-center">
	<div class="text-xs text-gray-800">{label}</div>
	<div class="text-xs font-bold">{price}</div>
</div>
