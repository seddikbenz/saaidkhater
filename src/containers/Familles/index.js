import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  background-color: rgba(0.5,0.5,0.5,0.5);
  display: ${props => props.show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
`

const ModalWraper = styled.div`
  width: 70%;
  background-color: #fefefe;
  position: absolute;
  top: 15px;
  height: 50%;
  border: 2px solid lightgrey;
  border-top: 24px solid lightgrey;
  border-radius: 3px;
  padding: 5px;
  .close{
    position: absolute;
    right: 3px;
    top: -20px;
    :hover{
      color: red;
      cursor: pointer;
    }
  }
  .title{
    position: absolute;
    left: 3px;
    top: -20px;
  }
`

const Modal = ({children, title, show}) => (
  <ModalBackground show={show}>
    <ModalWraper>
      <a className={'close'} >X</a>
      <a className={'title'} >{title}</a>
      {children}
    </ModalWraper>
  </ModalBackground>
)

const Familles = ({showFamilles}) => (
  <Modal title='famille' show={showFamilles} >
    familles
  </Modal>
)

const mapState = state => ({
  showFamilles: state.familles.showFamilles
})
const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(Familles)