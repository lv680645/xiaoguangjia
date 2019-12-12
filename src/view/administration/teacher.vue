<template>
  <div>
    <Card>
      <row class="registerFirm-page">
				<div class="registerFirm-search">
					<Button class="registerFirm-search-li" type="primary" @click="join">新增</Button>
                    <Button class="registerFirm-search-li" type="primary" @click="join">排课</Button>
					<Icon class="registerFirm-search-li cur-pionter" type="ios-trash-outline" size="30"/>
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
          title: '性别',
          key: 'address'
        },
        {
          title: '联系方式',
          key: 'address'
        },
        {
          title: '科目',
          key: 'address'
        },
        {
          title: '所带班级',
          key: 'address'
        },
        {
          title: '状态',
          key: 'address'
        },
        {
          title: '创建时间',
          key: 'address'
        },
        {
          title: '备注',
          key: 'address'
        },
        {
          title: '课表',
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
              }, '查看课表'),
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
              }, '编辑')
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

    },
    join () {
      this.$router.push({
			  name: 'join'
      })
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
