<template>
	<div class="page-dial">
		<div class="post-title"><span class="name">啦啦啦</span>获得30元优惠券</div>
		<div class="text-center dial">
			
		</div>
	</div>
</template>

<script>
export default {
	name: 'dial',
	data () {
		return {
			name: ''
		}
	}
}
</script>

<style lang="scss">
@import 'src/assets/css/common.scss';
.page-dial{
	height: 100%;
	background-image: url(#{$url-171111}rotary_ic_back_02.png);
	background-size: 100% 100%;
	padding-top: 2.2rem;
	.post-title{
		font-size: .26rem;
		padding: .09rem 0;
		color: #fff;
		text-align: center;
		background-image: url(#{$url-171111}rotary_ic_rectangle.png);
		.name{color: #ffd779;}
	}
}
</style>
