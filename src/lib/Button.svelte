<script lang="ts">

    // 
    export let placeholder
    export let onPress
    export let isDisabled = false
    
</script>

<div class="btn">
    <button on:click={onPress} disabled={isDisabled}>{placeholder}</button>
</div>
