<script setup lang="ts">
import { onMounted, ref } from "vue";
import { get } from "../utils/http";

interface iUser {
	name: string;
	nick: string;
	avatar: string;
	signature: string;
}

const user = ref<iUser>({
	name: "",
	nick: "",
	avatar: "",
	signature: "",
});

const getUser = async (name: string) => {
	let params = {
		name: name,
	};
	const res = await get<iUser>("/api/user", { params });
	if (res.data) user.value = res.data;
};

onMounted(() => {
	getUser("kirito");
});
</script>
<template>
	<div class="card_view">
		<div class="card gradient_shadow">
			<div class="info">
				<div class="avatar">
					<div class="loading-image"></div>
					<img
						:src="
							'https://verivista.oss-cn-beijing.aliyuncs.com/avatar/' +
							user.name +
							'.' +
							user.avatar
						"
						alt="头像"
					/>
				</div>
				<div class="name">
					<div class="mood">
						<div class="mood_inner">
							<div class="mood_block" v-for="item in 15" :key="item"></div>
						</div>
					</div>
					<div class="text">{{ user.nick }}</div>
				</div>
			</div>
			<div class="signature">
				{{ user.signature }}
			</div>
		</div>
	</div>
</template>
<style scoped lang="less">
@keyframes mood_loader {
	0% {
		transform: scale(1);
		box-shadow: 0 0 1.25rem #8ba3c7;
	}

	13% {
		transform: scale(1, 4);
		box-shadow: 0 0 2.5rem #003d74;
	}

	26% {
		transform: scale(1);
		box-shadow: 0 0 1.25rem #19325f;
	}
}
.card_view {
	position: relative;
	padding: 1rem;
	.card {
		width: 15rem;
		margin: 0 auto;
		background-color: rgba(0, 0, 0, 0.625);
		font-family: "Circle Font";
		.info {
			display: flex;
			.avatar {
				width: 4rem;
				height: 4rem;
				border: 0.125rem solid transparent;
				animation: border_rotating 2s linear infinite;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.name {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				flex: 1;
				.mood {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 9.375rem;
					height: 1.25rem;
					margin: 0 auto;
					position: relative;
					.mood_inner {
						display: flex;
						justify-content: center;
						align-items: center;
						position: relative;
						.mood_block {
							display: inline-block;
							width: 0.3125rem;
							height: 0.5rem;
							margin: 0.125rem;
							background-color: rgb(53, 143, 246);
							box-shadow: 0 0 30px rgb(53, 143, 246);
							animation: mood_loader 3s infinite;
						}
						.mood_block:nth-child(1) {
							animation-delay: 0.2s;
						}
						.mood_block:nth-child(2) {
							animation-delay: 0.4s;
						}
						.mood_block:nth-child(3) {
							animation-delay: 0.6s;
						}
						.mood_block:nth-child(4) {
							animation-delay: 0.8s;
						}
						.mood_block:nth-child(5) {
							animation-delay: 1s;
						}
						.mood_block:nth-child(6) {
							animation-delay: 1.2s;
						}
						.mood_block:nth-child(7) {
							animation-delay: 1.4s;
						}
						.mood_block:nth-child(8) {
							animation-delay: 1.6s;
						}
						.mood_block:nth-child(9) {
							animation-delay: 1.8s;
						}
						.mood_block:nth-child(10) {
							animation-delay: 2s;
						}
						.mood_block:nth-child(11) {
							animation-delay: 2.2s;
						}
						.mood_block:nth-child(12) {
							animation-delay: 2.4s;
						}
						.mood_block:nth-child(13) {
							animation-delay: 2.6s;
						}
						.mood_block:nth-child(14) {
							animation-delay: 2.8s;
						}
						.mood_block:nth-child(15) {
							animation-delay: 3s;
						}
					}
				}
				.mood::before {
					content: "";
					position: absolute;
					top: -0.625rem;
					left: -0.625rem;
					right: -0.625rem;
					bottom: -0.625rem;
					border-radius: 50%;
				}
				.text {
					display: flex;
					justify-content: center;
					align-items: flex-end;
					font-size: 1.5rem;
					flex: 1;
				}
			}
		}
		.signature {
			margin-top: 1.25rem;
      max-height: 8.25rem;
		}
	}
}
</style>
