<template>
  <div>
    <el-button>按钮</el-button>
    <!-- <el-tree :data="data" default-expand-all></el-tree> -->
    <org-tree :data="data" :renderContent="renderContent"></org-tree>
  </div>
</template>
<script>
import OrgTree from "vue2-org-tree";
export default {
  name: "AvgTree",
  props: {
    data: Object
  },
  components: { "org-tree": OrgTree },
  data() {
    return {};
  },
  methods: {
    renderContent: function(h, data) {
      // eslint-disable-next-line no-console
      // console.log(h);
      // eslint-disable-next-line no-console
      console.log(data);
      return (
        <span>
          {data.label}
          <el-button
            type="primary"
            circle
            icon="el-icon-circle-plus"
          ></el-button>
          <el-button type="danger" circle icon="el-icon-delete"></el-button>
        </span>
      );
    }
  }
};
</script>
<style>
.el-tree-node {
  float: left;
}
</style>