<script setup lang="ts">
import { onMounted, ref } from "vue";
import { get } from "../utils/http";
interface iICP {
	license: string;
}

const icp = ref<iICP>({
	license: "",
});

onMounted(async () => {
	const res = await get<iICP>("/api/icp");
	if (res.data) icp.value = res.data;
});
</script>
<template>
	<div class="verivista_footer">
		<hr />
		<div class="icp">ICP备案编号：{{ icp.license }}</div>
	</div>
</template>
<style lang="less" scoped>
.verivista_footer {
	.icp {
		font-size: 1.5vh;
		line-height: 2vh;
		text-align: center;
	}
}
</style>
