<template>
  <div>
    <Card>
      <row class="registerFirm-page">
				<div class="registerFirm-search">
					<Button class="registerFirm-search-li" type="primary" @click="add">新增</Button>
                    <Button class="registerFirm-search-li" type="primary">排课</Button>
					<Icon class="registerFirm-search-li cur-pionter" type="ios-trash-outline" size="30"/>
					<div class="registerFirm-search-rgh">
						<Checkbox class="registerFirm-search-li">只显示在读</Checkbox>
						<Input class="registerFirm-search-li" placeholder="请输入" style="width: auto" />
						<Select class="registerFirm-search-li" style="width:200px">
							<Option value="beijing">New York</Option>
							<Option value="shanghai">London</Option>
							<Option value="shenzhen">Sydney</Option>
						</Select>
						<Button>搜索</Button>
						<Button>重置</Button>
					</div>
				</div>
        <div style="clear:both;height:20px;"></div>
				<Alert class="registerFirm-alert">已选择 2 项  |   清空</Alert>
				<row>
					<Table border :columns="columns" :data="data"></Table>
				</row>
				<row style="padding-top: 20px;">
					<Page style="float: right;" :total="40" show-total  show-elevator show-sizer/>
				</row>
      </row>
    </Card>
    <Modal
        v-model="gradeModal"
        title="新增班级"
		width="1000"
        @on-ok="gradeConfirm"
        @on-cancel="gradeCancel">
		    <Form :label-width="120">
		    	<Row type="flex" justify="space-between">
            <Col span="24">基本信息</Col>
		    		<Col span="10">
		    			<FormItem label="课程">
		    					<Input type="text"></Input>
		    			</FormItem>
		    		</Col>
		    		<Col span="10">
		    			<FormItem label="班级名称">
		    					<Input type="text"></Input>
		    			</FormItem>
		    		</Col>
            <Col span="10">
		    			<FormItem label="默认教室">
		    					<Input type="text"></Input>
		    			</FormItem>
		    		</Col>
            <Col span="10">
		    			<FormItem label="计划开班日期">
		    					<DatePicker type="date" placeholder="输入日期"></DatePicker>
		    			</FormItem>
		    		</Col>
            <Col span="10">
		    			<FormItem label="计划结业日期">
		    					<DatePicker type="date" placeholder="输入日期"></DatePicker>
		    			</FormItem>
		    		</Col>
            <Col span="10">
		    			<FormItem label="预招人数">
		    					<Input type="text"></Input>
		    			</FormItem>
		    		</Col>
            <Col span="24">
		    			<FormItem label="备注">
		    					<Input type="textarea" :rows="2"></Input>
		    			</FormItem>
		    		</Col>
						<Col span="24">上课信息</Col>
						<Col span="10">
							<FormItem label="上课老师">
		    					<Input type="text"></Input>
		    			</FormItem>
						</Col>
						<Col span="10">
							<FormItem label="助教">
		    					<Input type="text"></Input>
		    			</FormItem>
						</Col>
						<Col span="10">
							<FormItem label="上课时段">
									<Input type="text"></Input>
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
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '姓名',
          key: 'name',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.name)
            ])
          }
        },
        {
          title: '课管家',
          key: 'age',
          render: (h, params) => {
					  return h('div', [
					    h('img', {
                attrs: {
                  src: 'https://static.easyicon.net/preview/0/397.gif'
                }
              })
					  ])
          }
        },
        {
          title: '状态',
          key: 'address'
        },
        {
          title: '手机号码',
          key: 'address'
        },
        {
          title: '在读班级数',
          key: 'address'
        },
        {
          title: '剩余学费',
          key: 'address'
        },
        {
          title: '电子钱包',
          key: 'address'
        },
        {
          title: '欠费金额',
          key: 'address'
        },
        {
          title: '报名日期',
          key: 'address'
        }
      ],
      data: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park'
        }
      ],
      gradeModal: false
    }
  },
  methods: {
    add () {
      this.gradeModal = true
    },
    edit () {

    },
    gradeConfirm () {

    },
    gradeCancel () {

    }
  }
}
</script>
<style lang="less">
  .registerFirm-page{
    .registerFirm-search{
			padding: 20px 0;
			.cur-pionter{
				cursor: pointer;
			}
			&-li{
				margin-right: 10px;
			}
			&-rgh{
				float: right;
			}
		}
  }
	.ivu-card-head{
		display: none;
	}
</style>
