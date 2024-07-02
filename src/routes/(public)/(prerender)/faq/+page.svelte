<script>
	import FaQuestion from '$components/FAQuestion.svelte';

	// TODO Actual questions
	const data = [
		['Question 1', 'Answer 1'],
		['Question 2', 'Answer 2'],
		['Question 3', 'Answer 3'],
		['Question 4', 'Answer 4'],
		['Question 5', 'Answer 5'],
		['Question 6', 'Answer 6'],
		['Question 7', 'Answer 7'],
		['Question 8', 'Answer 8'],
		['Question 9', 'Answer 9'],
	];
</script>

<div
	aria-label="Frequently Asked Questions list"
	class="flex flex-col w-[100%] md:w-[80%] lg:w-[40%] gap-5 mb-20">
	{#each data as item}
		<FaQuestion question={item[0]} answer={item[1]} />
	{/each}
</div>
