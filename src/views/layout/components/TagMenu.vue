<template>
  <el-row>
    <el-col :span="24">
      <el-card>
        <el-tag
          v-for="(tag , index) in tagMenus"
          :key="tag.pathName"
          closable
          hit
          @close.stop="closeMenu(tag)"
        >
          <router-link :key="index" :to="tag.path">
            {{tag.meta.title}}
          </router-link>
        </el-tag>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'TagMenu',
    computed:{
      tagMenus(){
        const self = this;
        return self.$store.state.TagMenu.menus
      }
    },
    methods: {
      closeMenu(tab){
        const self = this;
        self.$store.commit('removeMenu' , tab);
      },
    },
    mounted(){
      const self = this;
    },
  }
</script>

<style scoped>
  .el-tag {
    margin-left: 10px;
  }
</style>
