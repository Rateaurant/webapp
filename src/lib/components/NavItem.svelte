<script lang="ts">
    export let data: string | undefined;
    export let alt: string | undefined;
    export let label: string | undefined;
</script>

<div class="
    flex gap-3 p-2 cursor-pointer rounded-sm
    group-hover:w-[13rem] hover:bg-white-0 transition-all duration-200
">
    <img src={data} alt={alt} width={24} />
    <span class="hidden group-hover:block">{label}</span>
</div>