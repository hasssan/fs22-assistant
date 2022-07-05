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

<div class="flex flex-col py-1 text-center {bg}">
	<div class="font-medium text-gray-700">{label}</div>
	<div class="font-bold">{price}</div>
</div>
