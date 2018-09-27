import React from 'react';
import styled from 'styled-components';
import {connect} from "react-redux";
import Header from './containers/Header'
import Footer from "./containers/Footer";
import Tab from './components/Tab'

import Home from './containers/Home'
import Costumers from './containers/Costumers'
import Articles from './containers/Articles'

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  background-color: aliceblue;
  user-select: none;
`

const App =({tabItems, activeTabItem, setActiveTabItem, removeTabItem}) => (
  <Wraper>
    <Header/>
    <Tab
      setActiveTabItem={setActiveTabItem}
      removeTabItem={removeTabItem}
      tabItems={tabItems}
      activeTabItem={activeTabItem}>
      {activeTabItem === 'Home' && <Home/>}
      {activeTabItem === 'Costumers' && <Costumers/>}
      {activeTabItem === 'Articles' && <Articles/>}
    </Tab>
    <Footer/>
  </Wraper>
);

const mapState = state => ({
  loading: state.app.loading,
  tabItems: state.app.tabItems,
  activeTabItem: state.app.activeTabItem
});

const mapDispatch = dispatch => ({
  addTabItem: dispatch.app.addTabItem,
  removeTabItem: dispatch.app.removeTabItem,
  setActiveTabItem: dispatch.app.setActiveTabItem,
});

export default connect(mapState, mapDispatch)(App)
