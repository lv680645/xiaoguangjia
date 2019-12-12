<template>
  <div>
    <Card>
      <row class="registerFirm-page">
				<div class="registerFirm-search">
					企业名称：
					<Input placeholder="请输入" style="width: auto" />
					 企业规模：
					<Input placeholder="请输入" style="width: auto" />
					联系人姓名:
					<Input placeholder="请输入" style="width: auto" />
					<Button type="primary">查询</Button>
					<Button>重置</Button>
				</div>
				<Alert class="registerFirm-alert">已选择 2 项  |   清空</Alert>
				<row>
					<Table border :columns="columns" :data="data"></Table>
				</row>
				<row style="padding-top: 20px;">
					<Page :total="40" show-total  show-elevator show-sizer/>
				</row>
      </row>
    </Card>
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
          type: 'index',
          width: 80,
          title: '序号',
          align: 'center'
        },
        {
          title: '企业名称',
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
          title: '企业规模',
          key: 'age'
        },
        {
          title: '联系人姓名',
          key: 'address'
        },
        {
          title: '手机号',
          key: 'address'
        },
        {
          title: '邮箱',
          key: 'address'
        },
        {
          title: '创建时间',
          key: 'address'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, '审核通过')
            ])
          }
        }
      ],
      data: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park'
        }
      ]
    }
  },
  methods: {
    remove (index) {

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
