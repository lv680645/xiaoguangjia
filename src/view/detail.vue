<template>
	<div>
		<Card class="detail-page">
			<row class="detail-page-header">
				<Col span="6" class="detail-page-header-name">
					<p class="name">张三</p>
					<p class="wallet">电子钱包:121.00</p>
				</Col>
				<Col span="12" class="detail-page-header-message">
					<Form :label-width="100">
						<FormItem class="lef" label="手机号码:">
							<p>18585885412</p>
						</FormItem>
						<FormItem class="lef" label="报名日期:">
							<p>2018-03-03</p>
						</FormItem>
						<FormItem class="lef" label="在读班级数:">
							<p>2</p>
						</FormItem>
						<FormItem class="lef" label="性别:">
							<p>男</p>
						</FormItem>
						<FormItem class="lef" label="剩余学费:">
							<p>399.00</p>
						</FormItem>
					</Form>
				</Col>
				<Col span="6" class="detail-page-header-state">
					<Button class="btn" type="primary" @click="messageAdd">修改</Button>
					<p class="state">已退学</p>
				</Col>
			</row>
		</Card>
		<div class="detail-page-line"></div>
		<Card class="detail-page">
			<Menu mode="horizontal" class="detail-page-nav" :theme="theme" active-name="1" @on-select="menuSelect">
				<MenuItem name="1">
					学员信息
				</MenuItem>
				<MenuItem name="2">
					就读班级
				</MenuItem>
				<MenuItem name="3">
					课表
				</MenuItem>
				<MenuItem name="4">
					学费
				</MenuItem>
			</Menu>
			<Row type="flex" justify="center" v-show="curName == 1" class="detail-page-student">
				<Col span="8" class="detail-page-student-basic">
					<p class="tip">基本信息</p>
					<Form :label-width="100">
						<FormItem label="出生日期:">
							<p>18585885412</p>
						</FormItem>
						<FormItem label="身份证:">
							<p>2018-03-03</p>
						</FormItem>
						<FormItem label="公立学校:">
							<p>2</p>
						</FormItem>
						<FormItem label="公立学校年级:">
							<p>男</p>
						</FormItem>
						<FormItem label="招生来源:">
							<p>399.00</p>
						</FormItem>
						<FormItem label="招生人员:">
							<p>399.00</p>
						</FormItem>
						<FormItem label="状态:">
							<p>399.00</p>
						</FormItem>
						<FormItem label="备注:">
							<p>399.00</p>
						</FormItem>
					</Form>
				</Col>
				<Col span="12">
					<p class="tip">联系信息</p>
					<Form :label-width="100">
						<FormItem label="联系人:">
							<p>18585885412</p>
						</FormItem>
						<FormItem label="电话:">
							<p>2018-03-03</p>
						</FormItem>
						<FormItem label="职业:">
							<p>2</p>
						</FormItem>
						<FormItem label="家庭地址:">
							<p>男</p>
						</FormItem>
					</Form>
				</Col>
			</Row>
			<Row v-show="curName == 2" class="detail-page-class">
				<Checkbox class="paddingTop20">只显示当前在读班级</Checkbox>
				<Table :columns="columns1" :data="data1"></Table>
			</Row>
			<Row v-show="curName == 3">
				<Row class="detail-page-course" type="flex" justify="center">
					<Col class="table-th" span="3">周一</Col>
					<Col class="table-th" span="3">周二</Col>
					<Col class="table-th" span="3">周三</Col>
					<Col class="table-th" span="3">周四</Col>
					<Col class="table-th" span="3">周五</Col>
					<Col class="table-th" span="3">周六</Col>
					<Col class="table-th" span="3">周日</Col>
				</Row>
				<Row class="table-body" type="flex" justify="center">
					<Col class="table-td" span="3">
						<div class="table-td-tip">1</div>
						<div class="table-td-course">
							<div class="table-td-course-li">11:00~12:00  英语</div>
							<div class="table-td-course-li">11:00~12:00  英语</div>
							<div class="table-td-course-li">11:00~12:00  英语</div>
						</div>
					</Col>
					<Col class="table-td" span="3">
						<div class="table-td-tip">1</div>
						<div class="table-td-course">
							<div class="table-td-course-li">11:00~12:00  英语</div>
							<div class="table-td-course-li">11:00~12:00  英语</div>
							<div class="table-td-course-li">11:00~12:00  英语</div>
						</div>
					</Col>
					<Col class="table-td" span="3">
						<div class="table-td-tip">1</div>
						<div class="table-td-course">
							<div class="table-td-course-li">11:00~12:00  英语</div>
							<div class="table-td-course-li">11:00~12:00  英语</div>
							<div class="table-td-course-li">11:00~12:00  英语</div>
						</div>
					</Col>
					<Col class="table-td" span="3">
						<div class="table-td-tip">1</div>
						<div class="table-td-course">
							<div class="table-td-course-li">11:00~12:00  英语</div>
							<div class="table-td-course-li">11:00~12:00  英语</div>
							<div class="table-td-course-li">11:00~12:00  英语</div>
						</div>
					</Col>
					<Col class="table-td" span="3">
						<div class="table-td-tip">1</div>
						<div class="table-td-course">
							<div class="table-td-course-li">11:00~12:00  英语</div>
							<div class="table-td-course-li">11:00~12:00  英语</div>
							<div class="table-td-course-li">11:00~12:00  英语</div>
						</div>
					</Col>
					<Col class="table-td" span="3">
						<div class="table-td-tip">1</div>
						<div class="table-td-course">
							<div class="table-td-course-li">11:00~12:00  英语</div>
							<div class="table-td-course-li">11:00~12:00  英语</div>
							<div class="table-td-course-li">11:00~12:00  英语</div>
						</div>
					</Col>
					<Col class="table-td" span="3">
						<div class="table-td-tip">1</div>
						<div class="table-td-course">
							<div class="table-td-course-li">11:00~12:00  英语</div>
							<div class="table-td-course-li">11:00~12:00  英语</div>
							<div class="table-td-course-li">11:00~12:00  英语</div>
						</div>
					</Col>
				</Row>
			</Row>
			<Row v-show="curName == 4" class="detail-page-cost">
				<Table class="paddingTop20" :columns="columns2" :data="data2"></Table>
			</Row>
		</Card>
		<Modal
		    v-model="messageModal"
		    title="修改学员信息"
				width="1000"
		    @on-ok="messageConfirm"
		    @on-cancel="messageCancel">
		    <Form :label-width="120">
		    	<Row type="flex" justify="space-between">
		    		<Col span="10">
		    			<FormItem label="姓名">
		    					<Input type="text"></Input>
		    			</FormItem>
		    		</Col>
		    		<Col span="10">
		    			<FormItem label="联系方式">
		    					<Input type="text"></Input>
		    			</FormItem>
		    		</Col>
						<Col span="24">基本信息</Col>
						<Col span="10">
							<FormItem label="性别">
									<RadioGroup>
											<Radio label="男"></Radio>
											<Radio label="女"></Radio>
									</RadioGroup>
							</FormItem>
						</Col>
						<Col span="10">
							<FormItem label="报名日期">
									<DatePicker type="date" placeholder="输入日期"></DatePicker>
							</FormItem>
						</Col>
						<Col span="10">
							<FormItem label="招生来源">
									<Input type="text"></Input>
							</FormItem>
						</Col>
						<Col span="10">
							<FormItem label="招生人员">
									<Input type="text"></Input>
							</FormItem>
						</Col>
						<Col span="10">
							<FormItem label="身份证">
									<Input type="text"></Input>
							</FormItem>
						</Col>
						<Col span="10">
							<FormItem label="出生日期">
									<DatePicker type="date" placeholder="输入日期"></DatePicker>
							</FormItem>
						</Col>
						<Col span="10">
							<FormItem label="公立学校">
									<Input type="text"></Input>
							</FormItem>
						</Col>
						<Col span="10">
							<FormItem label="公立学校年级">
									<Input type="text"></Input>
							</FormItem>
						</Col>
						<Col span="10">
							<FormItem label="公立学校班级">
									<Input type="text"></Input>
							</FormItem>
						</Col>
						<Col span="10">
							<FormItem label="状态">
									<Select>
											<Option value="beijing">在读</Option>
											<Option value="shenzhen">退学</Option>
									</Select>
							</FormItem>
						</Col>
						<Col span="24">
							<FormItem label="备注">
									<Input type="textarea" :rows="2"></Input>
							</FormItem>
						</Col>
						<Col span="24">联系信息</Col>
						<Col span="7">
							<FormItem label="家属">
									<Input>
										<Select slot="prepend" style="width: 80px">
												<Option value="爸爸">爸爸</Option>
												<Option value="妈妈">妈妈</Option>
										</Select>
									</Input>
							</FormItem>
						</Col>
						<Col span="7">
							<FormItem label="电话">
									<Input type="text"></Input>
							</FormItem>
						</Col>
						<Col span="7">
							<FormItem label="职业">
									<Input type="text"></Input>
							</FormItem>
						</Col>
						<Col span="3">
							<Icon :size="18" type="md-add"></Icon>
						</Col>
						<Col span="24">
							<FormItem label="备注">
									<Input type="textarea" :rows="2"></Input>
							</FormItem>
						</Col>
		    	</Row>
		    </Form>
		</Modal>
	</div>
</template>

<script>
export default {
  name: 'join_page',
  data () {
    return {
        theme:'light',
				messageModal: false,
		curName:"1",
		columns1: [
			{
				title: '班级',
				key: 'name'
			},
			{
				title: '状态',
				key: 'state'
			},
			{
				title: '课程',
				key: 'age'
			},
			{
				title: '入班日期',
				key: 'address'
			},
			{
				title: '老师',
				key: 'age'
			},
			{
				title: '人数',
				key: 'age'
			},
			{
				title: '教室',
				key: 'age'
			},
			{
				title: '上课时间',
				key: 'age'
			},
			{
				title: '上课进度',
				key: 'age'
			},
			{
				title: '状态',
				key: 'age'
			}
		],
		columns2: [
			{
				title: '课程',
				key: 'name'
			},
			{
				title: '计费方式',
				key: 'state'
			},
			{
				title: '购买数量',
				key: 'age'
			},
			{
				title: '购买金额（元）',
				key: 'address'
			},
			{
				title: '剩余数量',
				key: 'age'
			},
			{
				title: '过期数量',
				key: 'age'
			},
			{
				title: '剩余金额（元）',
				key: 'age'
			},
			{
				title: '班级',
				key: 'age'
			}
		],
		data1: [
			{
				name: 'Joe Black',
				state: '在读',
				age: 30,
				address: '2018-03-20',
				date: '2016-10-02'
			},
			{
				name: 'Jon Snow',
				state: '已出班',
				age: 26,
				address: '2018-03-20',
				date: '2016-10-04'
			}
		],
		data2: [
			{
				name: 'Joe Black',
				state: '在读',
				age: 30,
				address: '2018-03-20',
				date: '2016-10-02'
			},
			{
				name: 'Jon Snow',
				state: '已出班',
				age: 26,
				address: '2018-03-20',
				date: '2016-10-04'
			}
		]
    }
  },
  methods: {
		messageAdd () {
		  this.messageModal = true
		},
    menuSelect(v){
		console.log(v)
		this.curName = v;
	},
	messageConfirm () {
	  this.messageModal = false
	},
	messageCancel () {
	  this.messageModal = false
	},
  }
}
</script>
<style lang="less">
    .detail-page{
		.paddingTop20{
			padding-top: 20px;
		}
		&-header{
		    height: 140px;
		    padding: 10px 0;
			&-name{
				text-align: center;
				border-right: 1px solid #888;
				height: 100%;
				.name{
					font-size: 20px;
					font-weight: 600;
					height: 80px;
					line-height: 80px;
				}
				.wallet{
					font-size: 14px;
				}
			}
			&-message{
				height: 100%;
				.lef{
					float: left;
				}
			}
			&-state{
				position: relative;
				.btn{
					float: left;
					position: absolute;
					left: 0;
					top: 0;
					bottom: 0;
					margin: auto;
					height: 40px;
					width: 80px;
				}
				.state{
					float: right;
					width: 80px;
					height: 80px;
					border-radius: 50%;
					background-color: #ccc;
					line-height: 80px;
					text-align: center;
				}
			}
		}
		&-nav{
			background-color: #f0f5ff;
		}
		&-student{
			padding-top: 20px;
			.tip{
				font-size: 20px;
				font-weight: 600;
				padding: 10px 0 30px 30px;
			}
			&-basic{
				border-right: 1px solid #888;
			}
		}
    }
	.detail-page-line{
		height: 20px;
		clear: both;
	}
	.detail-page-course{
		margin-top: 20px;
		.table-th{
			text-align: center;
			background-color: #f4f4f4;
			padding: 15px 0;
			border-bottom: 1px solid rgba(204, 204, 204, 1);
			border-left: 1px solid rgba(204, 204, 204, 1);
			border-top: 1px solid rgba(204, 204, 204, 1);
		}
		.table-th:last-child{
			border-right: 1px solid rgba(204, 204, 204, 1);
		}
	}
	.table-body{
		.table-td{
			height: 110px;
			border-left: 1px solid rgba(204, 204, 204, 1);
			border-bottom: 1px solid rgba(204, 204, 204, 1);
			&-tip{
				width: 20px;
				height: 20px;
				background-color: #009999;
				color: #fff;
				text-align: center;
				line-height: 20px;
			}
			&-course{
				padding: 0 5px;
				&-li{
					background-color: #996600;
					color: #ff;
					margin: 3px 0;
					text-align: center;
				}
			}
		}
		.table-td:last-child{
			border-right: 1px solid rgba(204, 204, 204, 1);
		}
	}
</style>
