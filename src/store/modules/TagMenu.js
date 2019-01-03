const tagMenu = {
  state: {
    menus: [],
  },

  mutations: {
    addMenu(state , menu){
      let flag = false;
      state.menus.forEach(_memu => {
        if(_memu.pathName === menu.pathName){
          flag = true;
        }
      });
      if(!flag){
        state.menus.push(menu);
      }
    },
    removeMenu(state , menu){
      let index;
      state.menus.forEach((_menu , _index) => {
        if(_menu.pathName === menu.pathName){
          index = _index;
        }
      });
      state.menus.splice(index , 1);
    },
  },

  actions: {

  }
}

export default tagMenu
