import React from 'react'
import styled from 'styled-components'

const TabWrapper = styled.div`
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
`

const StyledTabBotton = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 24px;
  width: 140px;
  background-color: ${props => props.active ? 'white' : 'lightgray'};
  border-bottom: ${props => props.active ? '1px solid lightgray' : '1px solid #000'};
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  margin-left: 5px;
  .item{
    width: 100%;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
  }
  .close{
    position: absolute;
    font-size: 14px;
    font-weight: bold;
    right: 2px;
    top: 0px;
    :hover{
      color: red;
      cursor: pointer;
    }
  }
`

const TabBotton =({setActiveTabItem, removeTabItem,activeTabItem, item, children}) => (
  <StyledTabBotton active={activeTabItem === item}>
    <a className={'item'} onClick={()=>{setActiveTabItem(item)}}>{children}</a>
    <a className={'close'} onClick={()=>{removeTabItem(item)}}>X</a>
  </StyledTabBotton>
)

const TabBottons = styled.div`
  height: 36px;
  background-color: gray;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`

const TabBody = styled.div`
  background-color: #fefefe;
  height: 100vh;
`


const Tab = ({tabItems, setActiveTabItem, removeTabItem, activeTabItem, children}) => (
  <TabWrapper>
    <TabBottons>
      {tabItems.length !== 0 && tabItems.map((item, index)=>(
        <TabBotton
          key={index}
          item={item}
          activeTabItem={activeTabItem}
          setActiveTabItem={setActiveTabItem}
          removeTabItem={removeTabItem}
        >{item}</TabBotton>
      ))}
    </TabBottons>
    <TabBody>
      {children}
    </TabBody>
  </TabWrapper>
)

export default Tab