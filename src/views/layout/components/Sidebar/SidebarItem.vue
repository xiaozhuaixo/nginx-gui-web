<template>
  <div class="menu-wrapper">
    <div v-for="menu in menus" :key="menu.name">
      <router-link v-if="!menu.isParent" :to="menu.path">
        <el-menu-item :index="menu.path">
          <span class="fa" :class="'fa-' + menu.icon"></span>
          <span slot="title">{{menu.title}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :index="menu.path">
        <template slot="title">
          <i class="fa" :class="'fa-' + menu.icon"></i>
          <span slot="title">{{menu.title}}</span>
        </template>

        <template v-for="child in menu.children">
          <router-link v-if="!child.isParent" :to="child.path">
            <el-menu-item :index="child.path">
              <i class="fa" :class="'fa-' + child.icon"></i>
              <span slot="title">{{child.title}}</span>
            </el-menu-item>
          </router-link>

          <el-submenu v-else :index="child.path">
            <template slot="title">
              <span class="fa" :class="'fa-' + menu.icon"></span>
              <span slot="title">{{menu.title}}</span>
            </template>
          </el-submenu>

        </template>
      </el-submenu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    menus: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
    }
  },
  methods: {

  },
  mounted(){
    const self = this;
  }
}
</script>
