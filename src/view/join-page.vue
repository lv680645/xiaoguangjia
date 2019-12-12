<template>
  <div>
    <Card>
      <row class="registerFirm-page">
				<div class="registerFirm-search">
					姓名：
					<Input placeholder="请输入" style="width: auto" />
					 手机号：
					<Input placeholder="请输入" style="width: auto" />
					性别:
					<RadioGroup>
							<Radio label="男"></Radio>
							<Radio label="女"></Radio>
					</RadioGroup>
					<Button @click="messageAdd">添加更多信息</Button>
				</div>
      </row>
    </Card>
		<Card>
		  <row class="registerFirm-page">
				<div class="registerFirm-search">
					<Button type="success" class="registerFirm-search-btn" @click="gradeSelect">选择班级</Button>
					<Button type="info" class="registerFirm-search-btn" @click="courseSelect">选择课程</Button>
				</div>
		  </row>
			<row>
				<Row>
						<Col span="8" class="course-table lef">
							<Row class="course-table-head">
									<Col span="8">课程：数学</Col>
									<Col span="8">班级：--</Col>
									<Col span="8">
										<Dropdown @on-click="handleClick" class="course-table-handle">
										  <Icon :size="18" type="md-more"></Icon>
										  <DropdownMenu slot="list">
										    <DropdownItem name="edit">
										      修改
										    </DropdownItem>
										    <DropdownItem name="remove">删除</DropdownItem>
										  </DropdownMenu>
										</Dropdown>
									</Col>
							</Row>
							<Row class="course-table-body">
									<Col span="8">单价：12.00</Col>
									<Col span="8">数量：12课时</Col>
									<Col span="8">金额：144.00</Col>
							</Row>
						</Col>
						<Col span="8" class="course-table lef">
							<Row class="course-table-head">
									<Col span="8">课程：数学</Col>
									<Col span="8">班级：--</Col>
									<Col span="8">
										<Dropdown @on-click="handleClick" class="course-table-handle">
										  <Icon :size="18" type="md-more"></Icon>
										  <DropdownMenu slot="list">
										    <DropdownItem name="edit">
										      修改
										    </DropdownItem>
										    <DropdownItem name="remove">删除</DropdownItem>
										  </DropdownMenu>
										</Dropdown>
									</Col>
							</Row>
							<Row class="course-table-body">
									<Col span="8">单价：12.00</Col>
									<Col span="8">数量：12课时</Col>
									<Col span="8">金额：144.00</Col>
							</Row>
						</Col>
				</Row>
			</row>
		</Card>
		<Row type="flex" justify="space-between"  class="registerFirm-page">
        <Col span="10">
					<p class="registerFirm-page-info">缴费信息</p>
					<Card>
					  <row>
							<div class="registerFirm-page-money">
								手机号：
								<Input placeholder="请输入" style="width: auto" />
								<p>应付金额</p>
							</div>
					  </row>
					</Card>
				</Col>
        <Col span="10">
					<p class="registerFirm-page-info">钱包信息</p>
					<Card>
					  <row>
							<div class="registerFirm-page-money">
								<p>电子钱包</p>
							</div>
					  </row>
					</Card>
				</Col>
    </Row>
		<Row type="flex" justify="space-around" class="code-row-bg">
        <Col span="4"><Button type="success">取消</Button></Col>
        <Col span="4"><Button type="success">保存</Button></Col>
    </Row>
		<!-- 弹出框 -->
		<Modal
        v-model="gradeModal"
        title="选择班级"
				width="1000"
        @on-ok="gradeConfirm"
        @on-cancel="gradeCancel">
				<Form>
					<Row type="flex" justify="space-between">
						<Col span="10">
							<FormItem>
									<Input type="text" placeholder="班级名称">
											<Button slot="append" icon="ios-search"></Button>
									</Input>
							</FormItem>
						</Col>
						<Col span="10">
							<FormItem :span="12">
									<Input type="text" placeholder="课程">
											<Button slot="append" icon="ios-more"></Button>
									</Input>
							</FormItem>
						</Col>
					</Row>
				</Form>
				<row>
					<Table border :columns="gradeColumns" :data="gradeData"></Table>
				</row>
				<row style="padding-top: 20px;">
					<Page style="float: right;" :total="40" show-total  show-elevator show-sizer/>
				</row>
    </Modal>
		<Modal
        v-model="courseModal"
        title="选择课程"
				width="1000"
        @on-ok="courseConfirm"
        @on-cancel="courseCancel">
        <Form>
        	<Row type="flex" justify="space-between">
        		<Col span="10">
        			<FormItem>
        					<Input type="text" placeholder="班级名称">
        							<Button slot="append" icon="ios-search"></Button>
        					</Input>
        			</FormItem>
        		</Col>
        		<Col span="10">
        			<FormItem :span="12">
        					<Input type="text" placeholder="课程">
        							<Button slot="append" icon="ios-more"></Button>
        					</Input>
        			</FormItem>
        		</Col>
        	</Row>
        </Form>
        <row>
        	<Table border :columns="courseColumns" :data="courseData"></Table>
        </row>
        <row style="padding-top: 20px;">
        	<Page style="float: right;" :total="40" show-total  show-elevator show-sizer/>
        </row>
    </Modal>
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
		<Modal
		    v-model="chargeModal"
		    title="收费"
				width="1000"
		    @on-ok="chargeConfirm"
		    @on-cancel="chargeCancel">
		    <Form :label-width="120">
		    	<Row type="flex" justify="center">
		    		<Col span="24">
		    			<FormItem label="课程">
		    					<p>数学</p>
		    			</FormItem>
		    		</Col>
		    		<Col span="8">
		    			<FormItem label="班级">
		    					<p>数学1</p>
		    			</FormItem>
		    		</Col>
						<Col span="8">
		    			<FormItem label="入班日期">
		    					<DatePicker type="date" placeholder="输入日期"></DatePicker>
		    			</FormItem>
		    		</Col>
						<Col span="8">
							<Icon :size="18" type="ios-trash"></Icon>
						</Col>
						<Col span="20" style="border: 1px solid #657180;padding: 0 10px;">
							<Row type="flex" justify="center" :gutter="16" style="background-color: #F8F8F8;height: 36px;line-height: 36px;text-align: center;">
								<Col span="4">收费标准</Col>
								<Col span="4">数量</Col>
								<Col span="4">折扣</Col>
								<Col span="4">折扣价（元）</Col>
								<Col span="4">金额（元）</Col>
							</Row>
							<Row type="flex" justify="center" :gutter="16" style="line-height: 32px;text-align: center;padding: 10px 0;">
								<Col span="4">12元 / 课时</Col>
								<Col span="4">
									<Input>
											<span slot="append">课时</span>
									</Input>
								</Col>
								<Col span="4">
									<Input>
											<span slot="append">%</span>
									</Input>
								</Col>
								<Col span="4"><Input></Input></Col>
								<Col span="4"><Input></Input></Col>
							</Row>
						</Col>
						<Col span="24">
							<Row>
								<Col span="8">
									<FormItem label="赠送">
											<Input>
													<span slot="append">课时</span>
											</Input>
									</FormItem>
								</Col>
							</Row>
						</Col>
						<Col span="24">
							<Row>
								<Col span="8">
									<FormItem label="有效期至">
											<Input>
													<DatePicker type="date" placeholder="输入日期"></DatePicker>
											</Input>
									</FormItem>
								</Col>
							</Row>
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
      data: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park'
        }
      ],
      gradeModal: false,
      courseModal: false,
      messageModal: false,
      chargeModal: false,
      gradeColumns: [
			  {
			    type: 'selection',
			    width: 60,
			    align: 'center',
          fixed: 'left'
			  },
			  {
			    title: '班级',
			    key: 'name',
          width: 100,
          align: 'center',
          fixed: 'left'
			  },
			  {
			    title: '课程',
          align: 'center',
			    key: 'age'
			  },
			  {
			    title: '老师',
          align: 'center',
			    key: 'address'
			  },
			  {
			    title: '人数',
          align: 'center',
			    key: 'address'
			  },
			  {
			    title: '教室',
          align: 'center',
			    key: 'address'
			  },
			  {
			    title: '开班日期',
          align: 'center',
			    key: 'address'
			  },
        {
			    title: '上课时间',
          align: 'center',
			    key: 'address'
			  },
			  {
			    title: '操作',
			    key: 'action',
			    width: 150,
			    align: 'center',
          fixed: 'right',
			    render: (h, params) => {
			      return h('div', [
			        h('Button', {
			          props: {
			            type: 'primary',
			            size: 'small'
			          },
			          on: {
			            click: () => {
			              this.conifrm(params.index)
			            }
			          }
			        }, '选择')
			      ])
			    }
			  }
      ],
      courseColumns: [
			  {
			    type: 'selection',
			    width: 60,
			    align: 'center',
          fixed: 'left'
			  },
			  {
			    title: '课程名称',
			    key: 'name',
          width: 100,
          align: 'center',
          		fixed: 'left'
			  },
			  {
			    title: '科目',
			    key: 'age',
          align: 'center'
			  },
			  {
			    title: '类别',
          align: 'center',
			    key: 'address'
			  },
			  {
			    title: '价格',
          align: 'center',
			    key: 'address'
			  },
			  {
			    title: '操作',
			    key: 'action',
			    width: 150,
			    align: 'center',
          fixed: 'right',
			    render: (h, params) => {
			      return h('div', [
			        h('Button', {
			          props: {
			            type: 'primary',
			            size: 'small'
			          },
			          on: {
			            click: () => {
			              this.conifrm(params.index)
			            }
			          }
			        }, '选择')
			      ])
			    }
			  }
      ],
      gradeData: [],
      courseData: []
    }
  },
  methods: {
    remove () {

    },
    edit () {
      this.chargeModal = true
    },
    gradeSelect () {
      this.gradeModal = true
    },
    courseSelect () {
      this.courseModal = true
    },
    messageAdd () {
      this.messageModal = true
    },
    gradeConfirm () {
      this.gradeModal = false
    },
    gradeCancel () {
      this.gradeModal = false
    },
    courseConfirm () {
      this.courseModal = false
    },
    courseCancel () {
      this.courseModal = false
    },
    messageConfirm () {
      this.messageModal = false
    },
    messageCancel () {
      this.messageModal = false
    },
    chargeConfirm () {
      this.messageModal = false
    },
    chargeCancel () {
      this.messageModal = false
    },
    handleClick (name) {
		  switch (name) {
		    case 'edit': this.edit()
		      break
		    case 'remove': this.remove()
		      break
		  }
    },
    conifrm () {

    }
  }
}
</script>
<style lang="less">
  .registerFirm-page{
    .registerFirm-search{
			padding: 20px 0;
			&-btn{
				margin-right: 10px;
			}
		}
		&-info{
			height: 60px;
			line-height: 60px;
			font-weight: 600;
			font-size: 16px;
		}
		&-money{
			height: 100px;
		}
  }
	.ivu-card-head{
		display: none;
	}
	.code-row-bg{
		padding-top: 20px;
		button{
			padding: 10px 60px;
		}
	}
	.course-table{
		border: 1px solid #999;
		margin-right: 30px;
		&-head{
			background-color: #f8f8f8;
			padding: 10px 20px;
			position: relative;
		}
		&-handle{
			position: absolute;
			right: 0;
			top: 0;
			cursor: pointer;
		}
		&-body{
			background-color: #fff;
			padding: 10px 20px;
		}
	}
</style>
