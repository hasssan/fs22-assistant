<script lang="ts">
	const navItems = [
		{ name: 'Home', url: '/' },
		{ name: 'Products Price', url: '/products-price' },
		{ name: 'Credits', url: '/credits' },
		{ name: 'Github', url: 'https://github.com/hasssan/fs22-assistant' },
	];
</script>

<nav class="">
	<div class="relative flex items-center justify-between h-16">
		<div class="flex-1 flex items-center justify-between">
			<div class="flex-shrink-0 flex items-center">
				<a href="/" class="text-darkBrown text-2xl font-bold">Farming Simulator 22 Assistant</a>
			</div>
			<div class="hidden sm:block sm:ml-6">
				<div class="flex space-x-4">
					{#each navItems as item}
						<a
							href={item.url}
							class="text-green-800 hover:bg-goldCrayola hover:text-white px-3 py-2 rounded-md text-sm font-medium"
							aria-current="page">{item.name}</a
						>
					{/each}
				</div>
			</div>
		</div>
	</div>
</nav>
