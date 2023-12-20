<script setup lang="ts">
import HomeIcon from "../assets/svg/HomeIcon.vue";
import NoteIcon from "../assets/svg/NoteIcon.vue";
import MessageIcon from "../assets/svg/MessageIcon.vue";
import InfoIcon from "../assets/svg/InfoIcon.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goRouter = (url: string) => {
	router.push({
		path: url,
	});
};
</script>
<template>
	<div class="verivista_header">
		<div class="content">
			<div class="nav_btn" @click="goRouter('/')">
				<HomeIcon class="icon" />
				<span>首页</span>
			</div>
			<div class="nav_btn">
				<NoteIcon class="icon" />
				<span>Life</span>
			</div>
			<div class="nav_btn">
				<MessageIcon class="icon" />
				<span>弹幕</span>
			</div>
			<div class="nav_btn">
				<InfoIcon class="icon" />
				<span>关于</span>
			</div>
			<div class="avatar"></div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.verivista_header {
	height: 3rem;
	font-size: 1rem;
	line-height: 3rem;
	font-family: "Circle Font", sans-serif;
	background-color: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(0.3125rem);
	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 70rem;
		margin: 0 auto;
		.nav_btn {
			display: flex;
			align-items: center;
			padding: 0 0.625rem;
			cursor: pointer;
			.icon {
				height: 1rem;
				width: 1rem;
				margin-right: 0.3125rem;
			}
		}
		.avatar {
			width: 2rem;
			height: 2rem;
			margin-left: auto;
			margin-right: 0.5rem;
			border-radius: 50%;
			background-image: url("https://verivista.oss-cn-beijing.aliyuncs.com/avatar/default_avatar.png");
			background-size: cover;
			background-position: center;
		}
	}
}
</style>
