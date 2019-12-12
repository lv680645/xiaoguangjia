<template>
  <div>
    <Card>
      <row class="registerFirm-page">
				<div class="registerFirm-search">
					<row>
            <Button style="float:left" @click="reselect">重新选择</Button>
            <Form :label-width="120" style="float:left">
              <FormItem label="学员姓名：" style="float:left">
                  <p>张一</p>
              </FormItem>
               <FormItem label="手机号码：" style="float:left">
                  <p>18585885412</p>
              </FormItem>
               <FormItem label="性别：" style="float:left">
                  <p>男</p>
              </FormItem>
               <FormItem label="电子钱包：" style="float:left">
                  <p>121.00</p>
              </FormItem>
            </Form>
          </row>
				</div>
        <Row type="flex" justify="center" class="code-row-bg" style="background-color:#f8f8f8;padding:10px;">
            <Col span="2">课程名称</Col>
            <Col span="2">班级</Col>
            <Col span="2">计费方式</Col>
            <Col span="2">购买数量</Col>
            <Col span="2">购买单价</Col>
            <Col span="2">购买金额（元）</Col>
            <Col span="2">剩余数量</Col>
            <Col span="2">剩余金额（元）</Col>
            <Col span="2">结转数量</Col>
            <Col span="2">结转金额（元）</Col>
        </Row>
				<Row type="flex" justify="center" class="code-row-bg">
            <Col span="2">语文</Col>
            <Col span="2">语文</Col>
            <Col span="2">课时</Col>
            <Col span="2">12</Col>
            <Col span="2">
              <p>12.00</p>
              <p>原价：12.00</p>
            </Col>
            <Col span="2">144.00</Col>
            <Col span="2">10</Col>
            <Col span="2">120.00</Col>
            <Col span="2">
              <Input></Input>
            </Col>
            <Col span="2">
              <Input></Input>
            </Col>
        </Row>
        <Row type="flex" justify="center" class="code-row-bg">
            <Col span="2">语文</Col>
            <Col span="2">语文</Col>
            <Col span="2">课时</Col>
            <Col span="2">12</Col>
            <Col span="2">
              <p>12.00</p>
              <p>原价：12.00</p>
            </Col>
            <Col span="2">144.00</Col>
            <Col span="2">10</Col>
            <Col span="2">120.00</Col>
            <Col span="2">
              <Input></Input>
            </Col>
            <Col span="2">
              <Input></Input>
            </Col>
        </Row>
      </row>
    </Card>
    <Card>
      <Row type="flex" justify="space-between" class="code-row-bg">
        <Col span="11">
          <p style="background-color:#f8f8f8;padding:10px;">结转信息</p>
          <row>
            <div style="clear:both"></div>
            <Form :label-width="120">
              <FormItem label="结转日期">
                  <Input></Input>
              </FormItem>
               <FormItem label="结转原因">
                  <Input></Input>
              </FormItem>
               <FormItem label="备注">
                  <Input></Input>
              </FormItem>
            </Form>
          </row>
        </Col>
        <Col span="11">
          <p style="background-color:#f8f8f8;padding:10px;">结算信息</p>
          <row>
              <Form :label-width="120">
              <FormItem label="合计">
                  <p>33</p>
              </FormItem>
               <FormItem label="结转后电子钱包余额">
                  <p>33</p>
              </FormItem>
            </Form>
          </row>
        </Col>
    </Row>
    </Card>
    <Modal
        v-model="studentModal"
        title="选择班级"
				width="1000"
        @on-ok="studentConfirm"
        @on-cancel="studentCancel">
				<Form>
					<Row>
						<FormItem style="float:left;">
                <Input type="text" placeholder="学生姓名 / 电话" >
                    <Button slot="append" icon="ios-search"></Button>
                </Input>
            </FormItem>
            <FormItem style="float:left;">
                <Button>重置</Button>
            </FormItem>
					</Row>
				</Form>
				<row>
					<Table border :columns="studentColumns" :data="studentData"></Table>
				</row>
				<row style="padding-top: 20px;">
					<Page style="float: right;" :total="40" show-total  show-elevator show-sizer/>
				</row>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'join_page',
  data () {
    return {
      studentModal: false,
      studentData: [],
      studentColumns: [
			  {
			    title: '姓名',
			    key: 'name',
          width: 100,
          align: 'center',
          fixed: 'left'
			  },
			  {
			    title: '手机号码',
			    key: 'age',
          align: 'center'
			  },
			  {
			    title: '状态',
          align: 'center',
			    key: 'address'
			  },
			  {
			    title: '报班日期',
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
			              this.chooseThis(params.index)
			            }
			          }
			        }, '选择')
			      ])
			    }
			  }
      ]
    }
  },
  methods: {
    reselect () {
      this.studentModal = true
    },
    studentConfirm (index) {

    },
    studentCancel () {

    },
    chooseThis () {

    }
  }
}
</script>
<style lang="less">
  .registerFirm-page{
    .registerFirm-search{
			padding: 20px 0;
		}
  }
	.ivu-card-head{
		display: none;
	}
</style>
