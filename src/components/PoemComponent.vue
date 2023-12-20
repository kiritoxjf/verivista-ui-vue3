<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { get } from "../utils/http";

interface iPoem {
	title: string;
	dynasty: string;
	author: string;
	content: string;
	tag: string;
}

const visibleChars = ref<number>(0);

const poem = ref<iPoem>({
	title: "",
	dynasty: "",
	author: "",
	content: "",
	tag: "",
});

const characters = computed(() => {
	return poem.value.content.split("");
});

const tags = computed(() => {
	return poem.value.tag.split(",");
});

const numberToHSLColor = (num: number, max: number) => {
	let hue = Math.floor((num / max) * 360);
	return `hsl(${hue}, 100%, 30%)`;
};

onMounted(async () => {
	const res = await get<iPoem>("/api/poem");
	if (res.data) poem.value = res.data;
	const charTimer = setInterval(() => {
		visibleChars.value++;
		if (visibleChars.value >= characters.value.length) {
			clearInterval(charTimer);
		}
	}, 300);
});
</script>
<template>
	<div class="poem_view">
		<div class="poem_box">
			<div class="title">{{ poem.title }}</div>
			<div class="author">{{ poem.author }}（{{ poem.dynasty }}）</div>
			<div class="content">
				<span
					v-for="(char, index) in characters"
					:key="index"
					:class="{ visible: visibleChars > index }"
				>
					{{ char }}
				</span>
			</div>
			<div class="tag">
				<div
					class="single"
					v-for="(tag, index) in tags"
					:key="index"
					:style="'background-color: ' + numberToHSLColor(index, tags.length)"
				>
					{{ tag }}
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.poem_view {
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	font-family: "Circle Font";
	.poem_box {
		width: 70%;
		padding: 2rem;
		background-color: rgba(0, 0, 0, 0.675);
		border-radius: 2rem;
		text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.8);
		.title {
			text-align: center;
			font-size: 2.5vh;
		}
		.author {
			text-align: center;
			font-size: 1.5vh;
		}
		.content {
			text-align: center;
			font-size: 4vh;
			span {
				opacity: 0;
				transition: opacity 0.5s ease;
			}
			span.visible {
				opacity: 1;
			}
		}
		.tag {
			text-align: center;
			.single {
				display: inline-block;
				margin: 0 0.2vh;
				padding: 0.1vh 0.3vh;
				border-radius: 0.5vw;
				font-size: 1.5vh;
			}
		}
	}
}
</style>
