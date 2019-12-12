<template>
  <div>
    <Card>
      <row class="registerFirm-page">
				<div class="registerFirm-search">
					<Button class="registerFirm-search-li" type="primary" @click="join">新学员报名</Button>
					<Icon class="registerFirm-search-li cur-pionter" type="ios-trash-outline" size="30" @click="delAll"/>
					<Icon class="registerFirm-search-li cur-pionter" type="ios-download-outline" size="30" @click="exportModal = true"/>
					<Icon class="registerFirm-search-li cur-pionter" type="ios-cloud-upload-outline" size="30" @click="leadModal = true"/>
					<div class="registerFirm-search-rgh">
						<Checkbox class="registerFirm-search-li">只显示在读</Checkbox>
						<Input class="registerFirm-search-li" placeholder="请输入" style="width: auto" />
						<Select class="registerFirm-search-li" style="width:200px">
							<Option value="beijing">New York</Option>
							<Option value="shanghai">London</Option>
							<Option value="shenzhen">Sydney</Option>
						</Select>
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
				<Alert class="registerFirm-alert">已选择 {{selectCount}} 项  
					<a class="select-clear" @click="clearSelectAll">清空</a>	
				</Alert>
				<row>
					<Table :loading="loading" ref="table" @on-selection-change="showSelect" border :columns="columns" :data="data"></Table>
				</row>
				<row style="padding-top: 20px;">
					<Page style="float: right;" :total="40" show-total  show-elevator show-sizer/>
				</row>
      </row>
    </Card>
		<Modal
        v-model="exportModal"
        title="导出学员"
				@on-ok="exportOk">
        <p style="height: 80px;line-height: 80px;text-align: center;">您确定要导出所有学员的基本信息吗？</p>
    </Modal>
		<Modal
		    v-model="leadModal"
		    title="导出学员"
				@on-ok="leadOk">
		    <div>
					<h2>导入流程</h2>
					<p>1、我们为您设置了导入模板，下载后按照模板格式内容上传即可<Button icon="ios-cloud-download-outline">下载模板</Button></p>
					<p>2、表头中红色字体表示的列为必选项；</p>
					<p>3、请不要进行插入列操作；</p>
					<Upload action="//jsonplaceholder.typicode.com/posts/" style="margin-top: 30px;">
							<Button icon="ios-cloud-upload-outline">选择文件</Button>
					</Upload>
				</div>
		</Modal>
  </div>
</template>

<script>
export default {
  name: 'join_page',
  data () {
    return {
			selectCount: 0, // 多选计数
			selectList: [], // 多选数据
			loading:false,
			exportModal:false,
			leadModal:false,
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
            return h("div", {},[
              h(
                "a",
                {
                  on: {
                    click: () => {
                      this.see(params.row);
                    }
                  }
                },
                params.row.name
              )
            ]);
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
        // {
        //   title: '操作',
        //   key: 'action',
        //   width: 150,
        //   align: 'center',
        //   render: (h, params) => {
        //     return h('div', [
        //       h('Button', {
        //         props: {
        //           type: 'primary',
        //           size: 'small'
        //         },
        //         on: {
        //           click: () => {
        //             this.remove(params.index)
        //           }
        //         }
        //       }, '审核通过')
        //     ])
        //   }
        // }
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
		showSelect (e) {
		  this.selectList = e
		  this.selectCount = e.length
		},
		clearSelectAll () {
		  this.$refs.table.selectAll(false)
		},
		delAll () {
		  if (this.selectCount <= 0) {
		    this.$Message.warning('您还未选择要删除的数据')
		    return
		  }
		  this.$Modal.confirm({
		    title: '确认删除',
		    content: '您确认要删除所选的 ' + this.selectCount + ' 条数据?',
		    onOk: () => {
		      let ids = ''
		      this.selectList.forEach(function (e) {
		        ids += e.id + ','
		      })
		      ids = ids.substring(0, ids.length - 1)
		      companyManageDelete(ids).then(res => {
		        if (res.data.success === true) {
		          this.$Message.success('操作成功')
		          this.clearSelectAll()
		          this.getDataList();
		        }
		      })
		    }
		  })
		},
    remove (index) {

    },
    join () {
      this.$router.push({
			  name: 'join'
      })
    },
		see(){
			this.$router.push({
			  name: 'detail'
			})
		},
		exportOk(){
			
		},
		leadOk(){
			
		},
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
