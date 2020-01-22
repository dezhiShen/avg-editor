<template>
  <!-- <el-tree :data="data" default-expand-all></el-tree> -->
  <org-tree :data="data"></org-tree>
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
  }
};
</script>
<style>
.el-tree-node {
  float: left;
}
</style>