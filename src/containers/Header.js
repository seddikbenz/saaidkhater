import React from 'react'
import styled from 'styled-components'
import {connect} from "react-redux";

const Wraper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkgrey;
  height: 42px;
`
const Item = styled.button`
  height: 32px;
  margin: 3px;
`
const Header = ({test, addTabItem, setActiveItem}) => {
  return (
    <Wraper>
      <Item onClick={()=>addTabItem('Home')}>Home</Item>
      <Item onClick={()=>addTabItem('Costumers')}>Costumers</Item>
      <Item onClick={()=>addTabItem('Articles')}>Articles</Item>
      <Item>Menu3</Item>
      <Item>Menu4</Item>
    </Wraper>
  )
}

const mapState = state => ({
  loading: state.app.loading,
  test: state.app.test,
});

const mapDispatch = dispatch => ({
  addTabItem: dispatch.app.addTabItem,
  setActiveItem: dispatch.app.setActiveItem,
  removeTabItem: dispatch.app.removeTabItem,
});

export default connect(mapState, mapDispatch)(Header)
