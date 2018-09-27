export default {
  state: {
    loading: false,
    test: 'hello',
    tabItems: ['Home'],
    activeTabItem: 'Home'
  },
  reducers: {
    toggleLoading: (state) => {
      return {...state, loading: !state.loading}
    },
    addTabItem: (state, item) => {
      let exist = false
      state.tabItems.map((i)=>{
        if(item === i) exist = true
        return 0
      })
      if(!exist) {
        return {...state, tabItems: [...state.tabItems, item], activeTabItem: item}
      }
      return {...state, activeTabItem: item}
    },
    removeTabItem: (state, item) => {
      let tab = []
      state.tabItems.map((i)=>{
        if(item !== i) tab.push(i)
        return 0
      })
      if(tab.length === 0){
        return {...state, tabItems: ['Home'], activeTabItem: 'Home'}
      } else {
        if(item === state.activeTabItem) {
          return {...state, tabItems: tab, activeTabItem: tab[0]}
        }
      }
      return {...state, tabItems: tab}
    },
    setActiveTabItem: (state, item) => {
      return {...state, activeTabItem: item}
    }
  },
  effects: {

  }
}