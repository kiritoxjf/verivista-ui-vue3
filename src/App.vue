<script setup lang="ts">
import HelloWorld from "./views/HelloWorld.vue";
import { useHomeStore } from "./stores/home";
import { zhCN, dateZhCN } from "naive-ui";
const store = useHomeStore();
</script>

<template>
	<div>
		<n-config-provider :locale="zhCN" :date-locale="dateZhCN">
			<HelloWorld :msg="store.name" />
		</n-config-provider>
	</div>
</template>

<style scoped></style>
