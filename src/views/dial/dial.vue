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
	.dial{
		margin-top: .4rem;
		position: relative;
		.bg-img{width: 7.14rem;}
		.rotate-card{
			position: absolute;
			height: 6.1rem;
			width: 6.08rem;
			left: .7rem;
			top: .35rem;
			.img{height: 100%;width: 100%;}
			.rotate-btn{
				position: absolute;
				height: 1.9rem;
				width: 1.49rem;
				top: 50%;left: 50%;
				transform: translate(-50%,-50%);
				cursor: pointer;
			}
		}
	}
	.chance{color: #e75b4c;font-size: .26rem;margin-top: .1rem;}
	.buttons{
		margin-top: .16rem;
		text-align: center;
	}
	.footer{margin-top: .5rem;}
	.btn{
		font-size: .34rem;
		color: #fff;
		width: 3.1rem;
		height: .83rem;
		line-height: .83rem;
		display:inline-block;
		background-image: url(#{$url-171111}button_ic_rule.png);
		&.right{
			background-image: url(#{$url-171111}button_ic_prizes.png)
		}
		&.footer{
			height: .7rem;
			width: 2.64rem;
			line-height: .7rem;
			font-size: .3rem;
			position: relative;
			background-image: url(#{$url-171111}button_ic_main.png)
		}
	}
}
@-webkit-keyframes rotation{
	from {-webkit-transform: rotate(0deg);}
	to {-webkit-transform: rotate(3600deg);}
}
.modal-dialog{
	position: fixed;
	height: 100%;
	width: 100%;
	z-index: 9999;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0,0.7);
	.main-content{
		width: 5.62rem;
		margin: 2rem auto 0;
		background-color: #fff;
		border-radius: .2rem;
		position: relative;
	}
	.ribbon{position: absolute;width: 6.75rem;height: 1.86rem;left: -.56rem;top: -.45rem;z-index:3;}
	.header-logo{
		position: relative;
		height: 1rem;
		line-height: 1rem;
		background-color: #f1573f;
		border-radius: .2rem .2rem 0 0;
		font-size: .4rem;
		font-weight: 500;
		color: #fff;
		text-align: center;
		.left,.right{position: absolute;width: .42rem;height: .71rem;top: .45rem;}
		.left{left: -.42rem;}
		.right{right: -.42rem;}
	}
	.close-btn{
		position: absolute;top: .3rem;right: .3rem;
		background-image: url(#{$url-171111}rotary_ic_fork.png);
		height:.35rem;width: .35rem;
		background-size: .28rem .28rem;
		background-position: right top;
		background-repeat: no-repeat;
		z-index: 4;
		&.default{background-image: url(#{$url-171111}rotary_ic_fork1.png);}
	}
	.dashed-line{height: .01rem;border-bottom: .01rem dashed #d2d2d2;width: 5rem;margin: .2rem auto;}
	.qr-code{height: 2.45rem;width: 2.45rem;border: 1px solid #ccc;display: inline-block;}
	.qr-text{color: #333;font-size: .3rem;padding: .2rem 0 .4rem;}
	.btn-back{
		margin: .2rem 0 .1rem;
		height: .83rem;
		width: 3.9rem;
		line-height: .83rem;
		text-align: center;
		font-size: .34rem;
		color: #fff;
		display: inline-block;
		background-image: url(#{$url-171111}rotary_ic_return.png);
		background-size: 100%;
	}
	.rule{
		padding: 0 .42rem;
		color: #333;
		font-size: .32rem;
		line-height: 1.5;
		margin-bottom: .3rem;
		&.r-1{margin-top: .42rem;}
		.red{font-weight: 500;color: #ef6354;}
	}
	.pw{color: #ef6354;padding-bottom: .42rem;margin-top: .25rem;}
	.null-error{
		font-size: .36rem;line-height: 1.5;color: #333;
		&.t-1{padding-top: 1.16rem;}
		&.t-2{padding-bottom: .6rem;margin-top: .1rem;}
	}
	.bottom-fence{height: .4rem;}
	.wx-share{float: right;margin-top:.3rem;margin-right: .36rem;}
}

</style>
<template>
	<div class="page-dial">
		<div class="post-title"><span class="name">啦啦啦</span>获得30元优惠券</div>
		<div class="dial">
			<img :src="this.baseUrl+'rotary_ic_1.png'" alt="" class="bg-img">
			<div class="rotate-card">
				<img :src="this.baseUrl+'rotary_ic_2.png'" alt="" class="img">
				<img :src="this.baseUrl+'rotary_ic_arrow1.png'" alt="" class="rotate-btn" @click="startDraw">
			</div>
		</div>
		<div class="chance text-center">您有{{ShareInfo ? ShareInfo.DrawCount : 0}}次抽奖机会</div>
		<div class="buttons row">
			<div class="col-12"><span class="btn" @click='modalRule = true'>活动规则</span></div>
			<div class="col-12"><span class="btn right">我的奖品</span></div>
		</div>
		<div class="footer text-center">
			<a class="btn footer" href="dial_hall.html">
				前往主会场
				<img :src="this.baseUrl+'rotary_ic_arrow.png'" alt="">
			</a>
		</div>
		<div class="modal-dialog hidden">
			<div class="main-content">
				<img :src="this.baseUrl+'rotary_ic_ribbon.png'" alt="" class="ribbon">
				<div class="header-logo">
					<img :src="this.baseUrl+'rotary_ic_left.png'" alt="" class="left">
					<img :src="this.baseUrl+'rotary_ic_right.png'" alt="" class="right">
					恭喜抽中优惠券
					<span class="close-btn"></span>
				</div>
				<div class="text-center">
					<img :src="this.baseUrl+'prizes_ic_3.png'" alt="">
				</div>
				<div class="dashed-line"></div>
				<div class="text-center">
					<img src="" alt="" class="qr-code">
				</div>
				<div class="text-center qr-text">
					识别二维码领取
				</div>
			</div>
		</div>
		<div class="modal-dialog hidden">
			<div class="main-content">
				<img :src="this.baseUrl+'rotary_ic_ribbon.png'" alt="" class="ribbon">
				<div class="header-logo">
					<img :src="this.baseUrl+'rotary_ic_left.png'" alt="" class="left">
					<img :src="this.baseUrl+'rotary_ic_right.png'" alt="" class="right">
					恭喜或得静好名著课程
					<span class="close-btn"></span>
				</div>
				<div class="text-center">
					<img :src="this.baseUrl+'prizes_ic_kindie.png'" alt="">
				</div>
				<div class="dashed-line"></div>
				<div class="text-center">
					<span class="btn-back">回到主会场</span>
				</div>
				<div class="text-center qr-text">
					明日仍可抽
				</div>
			</div>
		</div>
		<div :class="`modal-dialog ${modalRule ? '':'hidden'}` " @click="modalRule=false">
			<div class="main-content" @click.stop="">
				<div class="header-logo">
					<img :src="this.baseUrl+'rotary_ic_left.png'" alt="" class="left">
					<img :src="this.baseUrl+'rotary_ic_right.png'" alt="" class="right">
					活动规则
					<span class="close-btn" @click="modalRule=false"></span>
				</div>
				<div class="rule r-1">
					1.活动期间分享幸运大转盘，即可获得<span class="red">两次抽奖机会</span>
				</div>
				<div class="rule">
					2.用户需<span class="red">关注公众号</span>方能领奖，未关注用户视为自动放弃
				</div>
				<div class="rule">
					3.中奖用户按要求在公众号后台回复个人信息，奖品将在十日内发放
				</div>
				<div class="text-center pw">最终解释权归静好课堂所有</div>
			</div>
		</div>
		<div :class="`modal-dialog ${modalChance ? '':'hidden'}` " @click="modalChance=false">
			<div class="main-content" @click.stop="">
				<span class="close-btn default" @click="modalChance=false"></span>
				<p class="text-center null-error t-1">今日抽奖机会已用完</p>
				<p class="text-center null-error t-2">请明日再来</p>
				<div class="text-center">
					<span class="btn-back">回到主会场</span>
				</div>
				<div class="bottom-fence"></div>
			</div>
		</div>
		<div :class="`modal-dialog ${modalWXShare ? '':'hidden'}` " @click="modalWXShare=false">
			<img :src="this.baseUrl+'rotary_ic_share.png'" alt="" class="wx-share">
		</div>
	</div>
</template>
<script>
export default {
	name: 'dial',
	data () {
		return {
			baseUrl: this.cdn + '171111/',
			modalChance: false,
			modalRule: false,
			modalWXShare: false,
			ShareInfo: false
		}
	},
	methods: {
		startDraw () {
			if (!this.ShareInfo) {
				this.modalWXShare = true;
				return;
			} else {
				this.ShareInfo.DrawCount = 0;
				this.modalChance = true;
				return;
			}
			this.$ajax.post('/activity/wheel/drawGift').then(val => {
				console.log(val)
				if (val.flag == -1) {
					if (val.msg == 'noChance') {
						this.modalChance = true
					}
				}
			})
		}
	},
	beforeCreate () {
        // 
        this.$ajax.post('/activity/wheel/getInfo')
            .then(val => {
                console.log(val)
                this.ShareInfo = val.data.ShareInfo;
            })
    }
}
</script>

