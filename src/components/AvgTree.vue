<template>
  <div>
    <el-button>按钮</el-button>
    <!-- <el-tree :data="data" default-expand-all></el-tree> -->
    <org-tree :data="tree" :renderContent="renderContent"></org-tree>
    <el-dialog title="编辑" :visible.sync="editVisible">
      <el-input v-model="theEditData.label" type="textarea"></el-input>
      <el-button @click="handleEditNode" type="primary">确定</el-button>
    </el-dialog>
  </div>
</template>
<script>
import OrgTree from "vue2-org-tree";
export default {
  name: "AvgTree",
  props: {
    source: Object,
    tree: Object
  },
  watch: {
    // source: function(newValue) {
    //   if (newValue) this.sourceData = JSON.parse(JSON.stringify(newValue));
    //   // eslint-disable-next-line no-console
    //   console.log(this.sourceData);
    // }
  },
  components: { "org-tree": OrgTree },
  data() {
    return {
      editVisible: false,
      sourceData: null,
      theEditNode: {},
      theEditData: {}
    };
  },
  methods: {
    handleEditNode: function() {
      // eslint-disable-next-line no-console
      console.log("handleEditNode", this.sourceData[this.theEditNode.id]);
      this.$set(this.sourceData, this.theEditNode.id, this.theEditData);
      // eslint-disable-next-line no-console
      console.log("handleEditNode", this.sourceData[this.theEditNode.id]);
      this.editVisible = false;
    },
    addNode: function(node) {
      // eslint-disable-next-line no-console
      console.log("addNode=>", JSON.parse(JSON.stringify(node)));
    },
    deleteNode: function(node) {
      // eslint-disable-next-line no-console
      console.log("deleteNode=>", JSON.parse(JSON.stringify(node)));
    },
    editNode: function(node) {
      this.theEditData = JSON.parse(JSON.stringify(this.sourceData[node.id]));
      this.editVisible = true;
    },
    renderContent: function(h, tree) {
      if (this.sourceData == null) {
        this.$set(this, "sourceData", JSON.parse(JSON.stringify(this.source)));
      }
      return (
        <span>
          {this.sourceData[tree.id].label}
          <br />
          <el-button
            type="primary"
            circle
            icon="el-icon-circle-plus"
            onclick={() => {
              this.addNode(tree);
            }}
          ></el-button>
          <el-button
            type="danger"
            circle
            icon="el-icon-delete"
            onclick={() => {
              this.deleteNode(tree);
            }}
          ></el-button>
          <el-button
            type="danger"
            circle
            icon="el-icon-edit"
            onclick={() => {
              this.editNode(tree);
            }}
          ></el-button>
        </span>
      );
    }
  },
  mounted() {}
};
</script>
<style>
.el-tree-node {
  float: left;
}
</style>