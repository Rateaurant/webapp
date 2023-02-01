<div class="flex flex-col w-[70%] text-white gap-3">
	<div class="bg-gradient-to-b p-10 from-[#79F67E] to-[#79f67e00]">
		<div class="flex flex-row justify-between">
			<div class="text-sm">User12309812</div>
			<div class="flex flex-row">
				{#each ['f', 'f', 'f', 'h', 'e'] as i}
					<img class="drop-shadow-2xl" src="/{i}Star.svg" alt={i} />
				{/each}
			</div>
		</div>
		<div class="flex flex-row gap-6">
			<img src="/pfp.png" alt="pfp" />
			<div class="text-2xl self-center">Loved it</div>
		</div>
	</div>
	<div class="bg-gradient-to-b p-10 from-[#F67979] to-[#f6797900]">
		<div class="flex flex-row justify-between">
			<div class="text-sm">User12049812</div>
			<div class="flex flex-row">
				{#each ['f', 'f', 'e', 'e', 'e'] as i}
					<img class="drop-shadow-2xl" src="/{i}Star.svg" alt={i} />
				{/each}
			</div>
		</div>
		<div class="flex flex-row gap-6">
			<img src="/pfp.png" alt="pfp" />
			<div class="text-2xl self-center">Hated it</div>
		</div>
	</div>
</div>
