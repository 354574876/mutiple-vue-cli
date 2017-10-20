
<style lang="scss">
@import 'src/assets/css/common.scss';
.header{
	background-image: url(#{$url-171111}class_ic_title.png);
	height: 8.66rem;
	width: 7.5rem;
}
// 倒计时
.count-time{
	background-color: #d43a39;
	padding: .165rem 0;
	.title{
		font-size: .28rem;color: #fff;
		margin-bottom: .24rem;
		span{
			position: relative;
			&:before,&:after{
				position: absolute;
				content:'';
				top: 50%;
				margin-top: -1px;
				width: .52rem;
				height: .01rem;
				background-color: #fff;
			}
			&:before{left: -.66rem;}
			&:after{right: -.66rem;}
		}
	}
	.time-item{
		display: inline-block;
		height: .45rem;
		width: .45rem;
		line-height: .45rem;
		color: #333;
		font-size: .38rem;
		background-color: #fff;
		vertical-align: bottom;
		border-radius: .05rem;
		margin-right: .06rem;
		&:last-child{margin-right: 0;}
		&.text{font-size: .28rem;width: .4rem;color: #fff;background-color:#d43a39;}
	}
}
// 活动item 宽度
$award-item-width: 1.62rem;
// 背景红色色
$main-bg-color: #f1573f;
.free-ticket{
	background-color: $main-bg-color;
	padding: .3rem .3rem 0;
	.ticket{height:1.72rem;&.left{margin-right: .06rem;}}
	.ticket{height:1.72rem;&.right{margin-left: .06rem;}}
}
.main-title{
	color: #fff;
	font-size: .38rem;
	display:inline-block;
	position: relative;
	&.t-1{margin: .68rem 0 .46rem;}
	&.t-2{margin: -0.2rem 0 .46rem;}
	&:before,&:after{
		position: absolute;
		content:'';
		top:.01rem;
		height: 100%;
		width: .03rem;
		background-color: #fff;
		transform: rotate(15deg)
	}
	&:before{left: -.2rem;}
	&:after{right: -.15rem;}
}
// 字体红色
$color-active-red: #f66136;
.award-arear{
	width: 100%;
	overflow-x: scroll;
	-webkit-overflow-scrolling: touch;
	padding-bottom: .24rem;
	background-color: #dcdcdc;
	.content{
		width: 1.38rem + $award-item-width*6;
		.item{
			width: $award-item-width;
			float: left;
			text-align: center;
			color: #fffaf2;
			padding: .15rem 0;
			background-color: #313131;
			position: relative;
			.date{font-size: .3rem;}
			.text{font-size: .26rem;margin-top: .12rem;}
			&:first-child{width: 1.38rem;}
			&.active{
				&.on{
					background-color: $color-active-red;
					&:after{border-top-color:$color-active-red;display:block;}
				}
				&.off{
					background-color: #b5b5b5;
					&:after{border-top-color:#b5b5b5;display:block;}
				}
				&.will{
					background-color: #f3ac00;
					&:after{border-top-color:#f3ac00;display:block;}
				}
			}
			&:after{
				content: '';
				width: 0;
				height: 0;
				border-left: .12rem solid transparent;
				border-right: .12rem solid transparent;
				border-top: .14rem solid red;
				bottom: -.13rem;
				left: 50%;
				position: absolute;
				transform: translateX(-50%);
				z-index: 1;
				display: none;
			}
		}
	}
}
.award-img{
	height: 3.18rem;
}
.ac-intro{
	padding: .24rem;
	.intro-text{line-height: 1.3;}
	.price-area{
		padding-top: .28rem;
		.price{color: $color-active-red;margin-bottom: .1rem;}
	}
	.intro-btn{
		margin-top: -.22rem;
		margin-bottom: .08rem;
		width: 2rem;
		height: .56rem;
		line-height: .56rem;
		border-radius: .56rem;
		text-align: center;
		background-color: #b5b5b5;
		color: #fff;
		font-size: .3rem;
	}
}
.hot-class{
	background-color: $main-bg-color;
	&.dis{padding-top: .64rem;}
	.class-row{
		background-image: url(#{$url-171111}class_ic_booth.png);
		background-size: 7.5rem 1.82rem;
		background-position: left bottom;
		background-repeat: no-repeat;
		padding: 0 .45rem;
		&>.col-12{
			&:nth-child(1){text-align: right;padding-right: .2rem;}
			&:nth-child(2){text-align: left;padding-left: .2rem;}
		}
	}
	.class-item{
		height: 4.06rem;
		border: .04rem solid #bc0812;
		border-radius: .1rem;
		position: relative;
		.intro{
			position: absolute;
			width: 100%;
			bottom: .3rem;
			left: 0;
			background-color: #fff;
			text-align: left;
			padding-left: .15rem;
		}
		.about-teacher{
			margin-top: .22rem;font-size: .3rem;color: #313131;
			.name{margin-left:.2rem;font-size:.28rem;color: #14141c;}
		}
		.about-class{color: #5d5d5d;font-size: .24rem;line-height: 1.2;margin: .16rem 0 .22rem;}
	}
	.post-num{
		font-size: .22rem;color: #5d5d5d;text-align: center;
		margin: .15rem 0 .1rem;
	}
	.class-price{
		text-align: center;
		font-size: .4rem;
		color: #cb2d00;
		margin-bottom: .35rem;
		.dis-price{
			font-size: .28rem;
			color: #9a5825;
			margin-left: .1rem;
			text-decoration: line-through;
		}
	}
}
.class-dis{
	background-color: #fff;
	text-align: center;
	padding-top: .4rem;
	img{height: 2.9rem;}
	p{font-size:.3rem;color: 333;margin-bottom: .4rem;}
}
.footer-href{
	text-align: center;
	padding: .82rem 0 .3rem;
	a{
		background-size: 100%;
		height: .92rem;
		width: 5.28rem;
		display: inline-block;
		background-image: url(#{$url-171111}class_ic_button.png);
	}
}
</style>
<template>
	<div class="page-dial-hall">
		<div class="header">
		</div>
		<div class="count-time">
			<div class="title text-center">
				<span>距离活动结束仅剩</span>
			</div>
			<div class="text-center">
				<span class="time-item">{{day.split('')[0]}}
					</span><span class="time-item">{{day.split('')[1]}}
					</span><span class="time-item text">天
					</span><span class="time-item">{{hour.split('')[0]}}
					</span><span class="time-item">{{hour.split('')[1]}}
					</span><span class="time-item text">时
					</span><span class="time-item">{{minute.split('')[0]}}
					</span><span class="time-item">{{minute.split('')[1]}}
					</span><span class="time-item text">分
					</span><span class="time-item">{{second.split('')[0]}}
					</span><span class="time-item">{{second.split('')[1]}}
					</span><span class="time-item text">秒</span>
			</div>
		</div>
		<div class="free-ticket">
			<div class="row">
				<div class="col-12 text-right"><img :src="this.baseUrl+'class_ic_coupon1.png'" alt="" class="ticket left"></div>
				<div class="col-12 text-left"><img :src="this.baseUrl+'class_ic_coupon2.png'" alt="" class="ticket right"></div>
			</div>
			<div class="text-center">
				<span class="main-title t-1">精选五折</span>
			</div>
		</div>
		<div class="award-arear">
			<div class="content clear">
				<div class="item active off">
					<p class="time">11.6</p>
					<p class="text">已结束</p>
				</div>
				<div class="item active on">
					<p class="time">11.6</p>
					<p class="text">已结束</p>
				</div>
				<div class="item active will">
					<p class="time">11.6</p>
					<p class="text">已结束</p>
				</div>
				<div class="item">
					<p class="time">11.6</p>
					<p class="text">已结束</p>
				</div>
				<div class="item">
					<p class="time">11.6</p>
					<p class="text">已结束</p>
				</div>
				<div class="item">
					<p class="time">11.6</p>
					<p class="text">已结束</p>
				</div>
				<div class="item">
					<p class="time">11.6</p>
					<p class="text">已结束</p>
				</div>
			</div>
		</div>
		<div class="award-img">
			
		</div>
		<div class="ac-intro">
			<p class="font-28 color-333 intro-text">课程介绍，课程介绍，课程介绍课程介绍，课程介绍，课程介绍课程介绍，课程介绍，课程介绍</p>
			<div class="price-area clear">
				<div class="float-left">
					<p class="price">￥40.00</p>
					<p class="font-22 color-84">不可叠加使用优惠券</p>
				</div>
				<div class="float-right">
					<div class="intro-btn">活动结束</div>
					<p class="font-22 color-84 text-center">2000人订阅</p>
				</div>
			</div>
		</div>
		<div class="hot-class">
			<img :src="this.baseUrl+'class_ic_garnish_2.png'" alt="">
			<div class="text-center">
				<span class="main-title t-2">热门课程</span>
			</div>
			<div class="class-row row">
				<div class="col-12">
					<div class="class-item">
						<div class="intro">
							<div class="about-teacher">静好名著专栏<span class="name">王姐</span></div>
							<div class="about-class">胜读解读私奔名著，带你走进大师的精神世界</div>
						</div>
					</div>
					<p class="post-num">3000人订阅</p>
					<div class="class-price"><span class="font-30">￥</span>99.99 <span class="dis-price">￥99.99</span></div>
				</div>
				<div class="col-12">
					<div class="class-item">
						<div class="intro">
							<div class="about-teacher">静好名著专栏<span class="name">王姐</span></div>
							<div class="about-class">胜读解读私奔名著，带你走进大师的精神世界</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="hot-class dis">
			<div class="class-row row">
				<div class="col-12">
					<div class="class-item">
						<div class="intro">
							<div class="about-teacher">静好名著专栏<span class="name">王姐</span></div>
							<div class="about-class">胜读解读私奔名著，带你走进大师的精神世界</div>
						</div>
					</div>
					<p class="post-num">3000人订阅</p>
					<div class="class-price"><span class="font-30">￥</span>99.99 <span class="dis-price">￥99.99</span></div>
				</div>
				<div class="col-12">
					<div class="class-item">
						<div class="intro">
							<div class="about-teacher">静好名著专栏<span class="name">王姐</span></div>
							<div class="about-class">胜读解读私奔名著，带你走进大师的精神世界</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="hot-class">
			<img :src="this.baseUrl+'class_ic_garnish_3.png'" alt="">
			<div class="text-center">
				<span class="main-title t-2">静好课堂</span>
			</div>
			<div class="class-dis row">
				<div class="col-12">
					<img :src="this.baseUrl+'class_ic_courses.png'" alt="">
					<p>一线大咖精选课程</p>
				</div>
				<div class="col-12">
					<img :src="this.baseUrl+'class_ic_message.png'" alt="">
					<p>留言互动在线答疑</p>
				</div>
				<div class="col-12">
					<img :src="this.baseUrl+'class_ic_live.png'" alt="">
					<p>超长时效永久可学</p>
				</div>
				<div class="col-12">
					<img :src="this.baseUrl+'class_ic_aging.png'" alt="">
					<p>实时直播对话大咖</p>
				</div>
			</div>
			<div class="footer-href">
				<a href=""></a>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'dial',
	data () {
		return {
			baseUrl: this.cdn + '171111/',
			// 当前时间
			CurTime: 0,
			day: '00',
			hour: '00',
			minute: '00',
			second: '00',
			// 是否过期字段
			END: false
		}
	},
	methods: {
		/**
		 * 活动倒计时
		 * @return {[type]} [description]
		 */
		countDown () {
			let 
				endTime = '2017/11/12 23:59:59',
				//相差的毫秒数
				disTime = new Date(endTime)
							- this.CurTime
				;
			if (disTime <= 0){
				this.END = true;
				disTime = 0;
				// 清除定时器
				if (this.interval) {
					clearInterval(this.interval);
				}
			}
			this.day = this.Stringfy(parseInt(disTime/1000/60/60/24));
			this.hour = this.Stringfy(parseInt(disTime/1000/60/60%24));
			this.minute = this.Stringfy(parseInt(disTime/1000/60%60));
			this.second = this.Stringfy(parseInt(disTime/1000%60));
		},
		Stringfy (time) {
			return time < 10 ? `0${time}` : time.toString()
		}
	},
	beforeCreate () {
        // 
        this.$ajax.post('/activity/wheel/index')
            .then(val => {
                this.CurTime = new Date(val.data.CurTime.replace(/-/g,'/')).getTime();
                this.countDown()
                this.interval = setInterval(() => {
                	this.CurTime += 1000;
                	this.countDown();
                }, 1000)
            })
    }
}
</script>

