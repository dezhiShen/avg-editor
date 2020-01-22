<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <tree :data="treeData" @change="nodeValueChange"></tree>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Tree from "./components/AvgTree.vue";

export default {
  name: "app",
  components: {
    Tree
  },
  data() {
    return {
      treeData: {
        id: 0,
        label: "XXX科技有限公司",
        children: [
          {
            id: 2,
            label: "产品研发部",
            children: [
              {
                id: 5,
                label: "研发-前端"
              },
              {
                id: 6,
                label: "研发-后端"
              },
              {
                id: 9,
                label: "UI设计"
              },
              {
                id: 10,
                label: "产品经理"
              }
            ]
          },
          {
            id: 3,
            label: "销售部",
            children: [
              {
                id: 7,
                label: "销售一部"
              },
              {
                id: 8,
                label: "销售二部"
              }
            ]
          },
          {
            id: 4,
            label: "财务部"
          },
          {
            id: 11,
            label: "HR人事"
          }
        ]
      }
    };
  },
  methods: {
    nodeValueChange: function() {}
  }
};
</script>

<style>
</style>
  },
