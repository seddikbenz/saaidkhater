import React from 'react'
import { connect } from "react-redux";
import styled from 'styled-components'

import Familles from '../Familles'

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
`

const BarTools = styled.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: lightgray;
  button{
    height: 24px;
    margin-left: 3px;
  }
`

const BarSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  input{
    width: 100%;
  }
  *{
    margin-left: 3px;
  }
`
const Table = styled.table`
  width: 90%;
  border: 1px solid black;
  text-align: left;
  th{
    border: 1px solid black;
    background-color: lightgray;
    margin: 0px;
  }
  td{
  }
  tr{
    border: 1px solid black;
  }
`

class Articles extends React.Component {
  constructor(){
    super()
  }
  componentDidUpdate(){
    this.props.getArticles()
  }
  render() {
    const {
      articles,
      searchValue,
      onSearchValueChange,
      searchType,
      onSearchTypeChange,
      famileValue,
      familles,
      onfamileValueChange,
      getArticles
    } = this.props
    return (
      <Wraper>
        <BarTools>
          <button>new</button>
          <button>Edit</button>
          <button>Delete</button>
          <button>Refresh</button>
          <button>Print</button>
        </BarTools>
        <BarSearch>
          <a>Search</a>
          <input value={searchValue} onChange={onSearchValueChange} />
          <select value={searchType} onChange={onSearchTypeChange} >
            <option>Code/Réf ou Désignation</option>
            <option>Code/Réf</option>
            <option>Désignation</option>
            <option>Code Barre</option>
          </select>
          <select value={famileValue} onChange={onfamileValueChange} >
            {
              familles.map((f, index) => (
                <option key={index} >{f}</option>
              ))}
          </select>
          <button>+</button>
        </BarSearch>
        <Table>
          <thead>
            <th>Code/Réf</th>
            <th>Désignation</th>
            <th>U. Mesure</th>
            <th>Quantité</th>
            <th>Prix Détail</th>
          </thead>
          <tbody>
            {articles.map((article, index) => (
              <tr key={index} >
                <td>{article.code}</td>
                <td>{article.designation}</td>
                <td>{article.uMesure}</td>
                <td>{article.quantite}</td>
                <td>{article.prixDetail}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Familles />
      </Wraper>
    )
  }
}

const mapState = state => ({
  searchValue: state.articles.searchValue,
  searchType: state.articles.searchType,
  familleValue: state.articles.familleValue,
  familles: state.familles.familles,
  articles: state.articles.articles
});

const mapDispatch = dispatch => ({
  onSearchValueChange: dispatch.articles.onSearchValueChange,
  onSearchTypeChange: dispatch.articles.onSearchTypeChange,
  onfamileValueChange: dispatch.articles.onfamileValueChange,
  getArticles: dispatch.articles.getArticles
});

export default connect(mapState, mapDispatch)(Articles)