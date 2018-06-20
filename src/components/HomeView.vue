<template>
<div>
    <div class="common-box">
        <header>
            <i class="left-icon"></i>
            <span class="title-text">常用功能</span>
        </header>
        <section>
            <ul class="list-item">
                <li v-for="item in list" :key="item.name">
                    {{item.operate}}
                </li>
            </ul>
        </section>
    </div>
    <div class="common-box">
        <header>
            <i class="left-icon"></i>
            <span class="title-text" v-bind="hotBusiness.title">{{hotBusiness.title}}</span>
        </header>
        <section>
            <ul class="list-item">
                <li v-for="item in hotBusiness" :key="item.name">
                    {{item.oprate}}
                </li>
            </ul>
        </section>
    </div>
</div>
</template>

<script>
export default {
  props: {
    hotBusiness: {
      type: Array,
      default() {
        return [
          { oprate: "sda" },
          { oprate: "sda" },
          { oprate: "sda" },
          { oprate: "sda" }
        ];
      }
    }
  },
  data() {
    return {
      list: [
        {
          operate: "产品受理"
        },
        {
          operate: "营销受理"
        },
        {
          operate: "普通入网"
        },
        {
          operate: "开打登记"
        },
        {
          operate: "档案补正"
        },
        {
          operate: "业务密码重置"
        },
        {
          operate: "补换卡"
        },
        {
          operate: "申请销户"
        },
        {
          operate: "融合产品订购"
        },
        {
          operate: "宽带业务开通"
        },
        {
          operate: "宽带业务变更"
        },
        {
          operate: "消费信息查询打印"
        },
        {
          operate: "现金缴费"
        },
        {
          operate: "报停复机"
        },
        {
          operate: "营业结账"
        }
      ]
    };
  }
};
</script>

<style scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.common-box {
  font-size: 14px;
  padding: 10px;
  background: #fff;
  margin: 10px;
  float: left;
}

.left-icon {
  width: 3px;
  background: #019ae5;
  height: 18px;
  vertical-align: sub;
  display: inline-block;
}

.common-box header {
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

.title-text {
  padding-left: 5px;
}

.common-box section {
  padding: 10px;
  margin: 20px;
  float: left;
}
.list-item li {
  float: left;
  width: calc(100% / 5);
  margin: 10px 0;
}
</style>
