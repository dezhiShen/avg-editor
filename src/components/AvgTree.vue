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
    addNode: function(node) {
      // eslint-disable-next-line no-console
      console.log("addNode=>", node);
    },
    deleteNode: function(node) {
      // eslint-disable-next-line no-console
      console.log("deleteNode=>", node);
    },
    renderContent: function(h, data) {
      // eslint-disable-next-line no-debugger
      debugger;
      return (
        <span>
          {data.label}
          <el-button
            type="primary"
            circle
            icon="el-icon-circle-plus"
            onclick={() => {
              this.addNode(data);
            }}
          ></el-button>
          <el-button
            type="danger"
            circle
            icon="el-icon-delete"
            onclick={() => {
              this.deleteNode(data);
            }}
          ></el-button>
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