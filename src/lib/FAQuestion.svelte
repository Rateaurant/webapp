<script lang="ts">
	import Button from './Button.svelte';

	export let question: string | undefined = undefined;
	export let answer: string | undefined = undefined;

	let showAnswer = false;
</script>

<Button
	label={`Click to ${showAnswer ? 'hide' : 'show'} the answer`}
	class="bg-dark-20 text-center p-5 rounded-l flex flex-col gap-5"
	handler={() => (showAnswer = !showAnswer)}>
	<div class="text-xl">{question}</div>
	{#if showAnswer}
		<div>{answer}</div>
	{/if}
</Button>
