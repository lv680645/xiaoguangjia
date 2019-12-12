<template>
  <div class="home">
    <Row :gutter="20">
      <!-- <i-col :xs="12" :md="8" :lg="4" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" style="height: 120px;padding-bottom: 10px;">
        <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
          <count-to :end="infor.count" count-class="count-style"/>
          <p>{{ infor.title }}</p>
        </infor-card>
      </i-col> -->
			<Menu mode="horizontal" theme="light" active-name="1" @on-select="menuSelect">
				<MenuItem name="1">
					<Icon type="ios-paper" />
					待办事项
				</MenuItem>
				<MenuItem name="2">
					<Icon type="md-stats" />
					<!-- <Icon type="ios-people" /> -->
					今日数据
				</MenuItem>
			</Menu>
    </Row>
		<Row v-show="curNme == 1" :gutter="16" class="home-link">
			<Col span="6">
				<Card class="home-link-card">
					<CellGroup>
						<Cell icon="ios-add" title="待点名(课)" to="/components/button">
							<Icon type="ios-contact" slot="icon"/>
						</Cell>
					</CellGroup>
					<div class="home-link-count">1</div>
				</Card>	
			</Col>
			<Col span="6">
				<Card class="home-link-card">
					<CellGroup>
						<Cell icon="ios-add" title="待分班(人)" to="/components/button">
							<Icon type="md-contacts" slot="icon"/>
						</Cell>
					</CellGroup>
					<div class="home-link-count">1</div>
				</Card>
			</Col>
			<Col span="6">
				<Card class="home-link-card">
					<CellGroup>
						<Cell icon="ios-add" title="费用预警(人)" to="/components/button">
							<Icon type="ios-notifications" color="red" slot="icon"/>
						</Cell>
					</CellGroup>
					<div class="home-link-count">1</div>
				</Card>
			</Col>
			<Col span="6">
				<Card class="home-link-card">
					<CellGroup>
						<Cell icon="ios-add" title="费用欠费(人)" to="/components/button">
							<Icon type="md-battery-dead" color="red" slot="icon"/>
						</Cell>
					</CellGroup>
					<div class="home-link-count">1</div>
				</Card>
			</Col>
		</Row>
		<Row v-show="curNme == 2" class="home-link">
			<Col span="6">
				<Card class="home-link-card">
					<CellGroup>
						<Cell icon="ios-add" title="收费(元)" to="/components/button">
							<Icon type="ios-contact" slot="icon"/>
						</Cell>
					</CellGroup>
					<div class="home-link-count">1</div>
				</Card>	
			</Col>
			<Col span="6">
				<Card class="home-link-card">
					<CellGroup>
						<Cell icon="ios-add" title="退费(元)" to="/components/button">
							<Icon type="md-contacts" slot="icon"/>
						</Cell>
					</CellGroup>
					<div class="home-link-count">1</div>
				</Card>
			</Col>
			<Col span="6">
				<Card class="home-link-card">
					<CellGroup>
						<Cell icon="ios-add" title="新增学员(人)" to="/components/button">
							<Icon type="ios-notifications" color="red" slot="icon"/>
						</Cell>
					</CellGroup>
					<div class="home-link-count">1</div>
				</Card>
			</Col>
			<Col span="6">
				<Card class="home-link-card">
					<CellGroup>
						<Cell icon="ios-add" title="课消(人)" to="/components/button">
							<Icon type="md-battery-dead" color="red" slot="icon"/>
						</Cell>
					</CellGroup>
					<div class="home-link-count">1</div>
				</Card>
			</Col>
		</Row>
		<Row class="home-common">
			<Card :bordered="false">
				<p slot="title">常用功能</p>
				<Row type="flex" :gutter="16" justify="center" class="home-common-use">
					<Col span="4" class="home-common-use-li">
						<div class="pic">
							<img src="https://i.loli.net/2017/08/21/599a521472424.jpg" alt="">
						</div>
						<div class="con">收费</div>
					</Col>
					<Col span="4" class="home-common-use-li">
						<div class="pic">
							<img src="https://i.loli.net/2017/08/21/599a521472424.jpg" alt="">
						</div>
						<div class="con">班级</div>
					</Col>
					<Col span="4" class="home-common-use-li">
						<div class="pic">
							<img src="https://i.loli.net/2017/08/21/599a521472424.jpg" alt="">
						</div>
						<div class="con">学员</div>
					</Col>
					<Col span="4" class="home-common-use-li">
						<div class="pic">
							<img src="https://i.loli.net/2017/08/21/599a521472424.jpg" alt="">
						</div>
						<div class="con">排课</div>
					</Col>
					<Col span="4" class="home-common-use-li">
						<div class="pic">
							<img src="https://i.loli.net/2017/08/21/599a521472424.jpg" alt="">
						</div>
						<div class="con">课程</div>
					</Col>
				</Row>
			</Card>
		</Row>
		<Row class="home-system">
			<Card :bordered="false">
				<p slot="title">系统说明</p>
				<Row type="flex" justify="center" class="home-system-use">
					<Col span="8" class="home-system-use-li">
						<div class="pic">
							<img src="https://i.loli.net/2017/08/21/599a521472424.jpg" alt="">
						</div>
						<div class="con">
							<p class="up">校锐星升级</p>
							<p class="down">版本迭代功能说明</p> 
						</div>
					</Col>
					<Col span="8" class="home-system-use-li">
						<div class="pic">
							<img src="https://i.loli.net/2017/08/21/599a521472424.jpg" alt="">
						</div>
						<div class="con">
							<p class="up">校锐星升级</p>
							<p class="down">版本迭代功能说明</p>
						</div>
					</Col>
					<Col span="8" class="home-system-use-li">
						<div class="pic">
							<img src="https://i.loli.net/2017/08/21/599a521472424.jpg" alt="">
						</div>
						<div class="con">
							<p class="up">校锐星升级</p>
							<p class="down">版本迭代功能说明</p>
						</div>
					</Col>
				</Row>
			</Card>
		</Row>
	</div>
</template>

<script>
import InforCard from '_c/info-card'
import CountTo from '_c/count-to'
import { ChartPie, ChartBar } from '_c/charts'
import Example from './example.vue'
export default {
  name: 'home',
  components: {
    InforCard,
    CountTo,
    ChartPie,
    ChartBar,
    Example
  },
  data () {
    return {
			curNme:1,
      inforCardData: [
        { title: '新增用户', icon: 'md-person-add', count: 803, color: '#2d8cf0' },
        { title: '累计点击', icon: 'md-locate', count: 232, color: '#19be6b' },
        { title: '新增问答', icon: 'md-help-circle', count: 142, color: '#ff9900' },
        { title: '分享统计', icon: 'md-share', count: 657, color: '#ed3f14' },
        { title: '新增互动', icon: 'md-chatbubbles', count: 12, color: '#E46CBB' },
        { title: '新增页面', icon: 'md-map', count: 14, color: '#9A66E4' }
      ],
      pieData: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ],
      barData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324
      }
    }
  },
  methods:{
	  menuSelect(v){
		  this.curNme = v;
	  }
  },
  mounted () {
    //
  }
}
</script>

<style lang="less">
.count-style{
  font-size: 50px;
}
	.home{
		.home-btns{
			overflow: hidden;
			border-bottom: 1px solid #f8f8f8;
			background-color: #fff;
			margin-bottom: 10px;
			padding: 10px;
			clear: both;
		}
		.btns-lis{
			float: right;
			margin-right: 10px;
		}
		.home-tip{
			font-size: 16px;
			font-weight: 600;
			height: 30px;
			line-height: 30px;
		}
		&-link{
			padding-top: 10px;
			&-card{
				height: 150px;
				border-left: 5px solid #d0f2b6;
			}
			&-count{
				text-align: center;
				line-height: 80px;
				font-weight: 600;
				font-size: 20px;
			}
		}
		&-common{
			padding-top: 10px;
			&-use{
				height: 150px;
				&-li{
					height: 150px;
					width: 200px;
					padding: 24px 0;
					.pic{
						width: 100px;
						height: 100px;
						float: left;
						border-radius: 50%;
						overflow: hidden;
						img{
							display: block;
							width: 100%;
							height: 100%;
						}
					}
					.con{
						line-height: 100px;
						padding-left: 10px;
						float: left;
					}
				}
			}
		}
		&-system{
			padding-top: 10px;
			&-use{
				height: 150px;
				&-li{
					height: 150px;
					padding: 50px 30px;
					border-right: 1px solid #eee;
					.pic{
						width: 50px;
						height: 50px;
						float: left;
						border-radius: 50%;
						overflow: hidden;
						margin-left: 50px;
						img{
							display: block;
							width: 100%;
							height: 100%;
						}
					}
					.con{
						padding-left: 10px;
						float: left;
						.up{
							line-height: 26px;
						}
						.down{
							color: #888;
							font-size: 12px;
						}
					}
				}
			}
		}
	}
</style>
