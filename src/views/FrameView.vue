<script setup lang="ts">
import Header from "../components/HeaderComponent.vue";
import Footer from "../components/FooterComponent.vue";
</script>
<template>
	<div class="verivista_frame">
		<Header />
		<router-view />
		<Footer />
	</div>
</template>
<style lang="less">
.verivista_frame {
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	background-image: url("https://verivista.oss-cn-beijing.aliyuncs.com/background/background-black.jpg");
	background-size: cover;
	background-position: center;
}
</style>
