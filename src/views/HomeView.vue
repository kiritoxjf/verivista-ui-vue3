<script setup lang="ts">
import Poem from "../components/PoemComponent.vue";
import Post from "../components/PostComponent.vue";
import Card from "../components/CardComponent.vue";
import State from "../components/StateComponent.vue";
import { ref } from "vue";

const poemRef = ref<Element | null>(null);
const postRef = ref<Element | null>(null);

const handleScroll = (index: number, event: WheelEvent) => {
	if (event.deltaY < 0) {
		if (index > 0) {
			if (poemRef.value) poemRef.value.scrollIntoView({ behavior: "smooth" });
		}
	} else {
		if (index < 1) {
			if (postRef.value) postRef.value.scrollIntoView({ behavior: "smooth" });
		}
	}
};
</script>
<template>
	<div class="verivista_home">
		<div class="verivista_poem" ref="poemRef" @wheel="handleScroll(0, $event)">
			<Poem />
		</div>
		<div class="verivista_post" ref="postRef" @wheel="handleScroll(1, $event)">
			<Card class="card_view" />
			<Post class="post_view" />
			<State class="state_view" />
		</div>
	</div>
</template>
<style lang="less" scoped>
.verivista_home {
	flex: 1 1 0;
	overflow: hidden;
	.verivista_poem {
		width: 100%;
		height: 100%;
	}
	.verivista_post {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
		backdrop-filter: blur(0.625rem);
		width: 100%;
		height: 100%;
		.card_view,
		.state_view {
			width: 25rem;
		}
		@media screen and (max-width: 1400px) {
			.card_view,
			.state_view {
				display: none;
			}
		}
		.post_view {
			margin: 2rem;
			padding: 1rem;
			align-self: stretch;
			flex: 1;
			max-width: 70rem;
		}
	}
}
</style>
