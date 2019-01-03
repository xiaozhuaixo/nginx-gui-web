<template>
    <el-scrollbar wrapClass="scrollbar-wrapper">
      <el-menu
        mode="vertical"
        :show-timeout="200"
        :default-active="$route.path"
        :collapse="isCollapse"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
      >
        <el-menu-item index="logo">
          <router-link to="/index/index" style="display:block;">
            <h5>{{projectName}}</h5>
          </router-link>
        </el-menu-item>
        <sidebar-item :menus="menus"></sidebar-item>
      </el-menu>
    </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import path from 'path'

export default {
  components: { SidebarItem },
  data(){
    return {
      menus: [],
      basePath: '',
      routePath: '',
    }
  },
  methods: {
    createMenu(routes , parentPath){
      const self = this;
      if(routes.length < 1){
        return;
      }
      let menus = [];
      routes.forEach(route => {
        if(!route.hidden){
          if(route.isNeedShow || route.children){
            if(!route.meta){
              self.basePath = path.resolve(this.basePath , route.path);
              menus = self.createMenu(route.children);
              return menus;
            }
            if(self.routePath.indexOf(route.path) === -1){
              self.routePath = '';
            }
            self.routePath = path.resolve(self.routePath , route.path);
            let menu = {
              title: route.meta.title,
              icon: route.meta.icon,
              name: route.name,
              path: route.path,
              isParent: true,
            };
            let subMenu = self.createMenu(route.children , route.path);
            menu.children = subMenu;
            menus.push(menu);
          }else{
            let routePath = '';
            if(parentPath){
              routePath = path.resolve(self.basePath , parentPath , route.path);
            }else{
              routePath = path.resolve(self.basePath , route.path);
            }
            let menu = {
              title: route.meta.title,
              icon: route.meta.icon,
              name: route.name,
              path: routePath,
            };
            menus.push(menu);
          }
        }
      });
      return menus;
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    },
    projectName(){
      return process.env.PROJECT_NAME;
    }
  },
  mounted(){
    const self = this;
    self.menus = self.createMenu(self.routes);
  },
}
</script>

<style scoped>
</style>
