<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <tree :tree="tree" :source="source" @change="nodeValueChange"></tree>
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
      source: {
        0: { id: 0, label: "XXX科技有限公司" },
        2: { id: 2, label: "产品研发部" },
        4: { id: 4, label: "财务部" },
        3: { id: 3, label: "销售部" },
        5: { id: 5, label: "研发-前端" },
        6: { id: 6, label: "研发-后端" },
        7: { id: 7, label: "销售一部" },
        8: { id: 8, label: "销售二部" },
        9: { id: 9, label: "UI设计" },
        10: { id: 10, label: "产品经理" },
        11: { id: 11, label: "HR人事" }
      },
      tree: {
        id: 0,
        children: [
          {
            id: 2,
            children: [
              {
                id: 5
              },
              {
                id: 6
              },
              {
                id: 9
              },
              {
                id: 10
              }
            ]
          },
          {
            id: 3,
            children: [
              {
                id: 7
              },
              {
                id: 8
              }
            ]
          },
          {
            id: 4
          },
          {
            id: 11
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
