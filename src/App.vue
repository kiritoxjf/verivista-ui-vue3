<script setup lang="ts">
import { zhCN, dateZhCN } from "naive-ui";
</script>

<template>
	<Suspense>
		<n-config-provider :locale="zhCN" :date-locale="dateZhCN">
			<router-view />
		</n-config-provider>
	</Suspense>
</template>

<style scoped>
.n-config-provider {
	height: 100%;
	width: 100%;
}
</style>
