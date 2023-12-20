<script setup lang="ts">
import Poem from '../components/PoemComponent.vue'
</script>
<template>
	<div class="verivista_home">
    <Poem />
  </div>
</template>
<style lang="less" scoped>
.verivista_home {
	flex: 1 1 0;
  overflow-y: auto;
}
</style>
