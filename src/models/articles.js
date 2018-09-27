import { api } from '../api'

export default {
  state: {
    searchValue: '',
    searchType: 'Code/Réf ou Désignation',
    familleValue: '',
    articles: [
      {
        code: 'code1',
        designation: 'designation1',
        uMesure: 'unite mesure',
        quantite: 5,
        prixDetail: 100
      },
      {
        code: 'code2',
        designation: 'designation2',
        uMesure: 'unite mesure',
        quantite: 4,
        prixDetail: 200
      },
      {
        code: 'code3',
        designation: 'designation3',
        uMesure: 'unite mesure',
        quantite: 7,
        prixDetail: 300
      },
      {
        code: 'code4',
        designation: 'designation4',
        uMesure: 'unite mesure',
        quantite: 0,
        prixDetail: 150
      }
    ]
  },
  reducers: {
    onSearchValueChange: (state, e) => {
      console.log(state.searchType)
      return { ...state, searchValue: e.target.value.toUpperCase() }
    },
    onSearchTypeChange: (state, e) => {
      return { ...state, searchType: e.target.value }
    },
    onfamileValueChange: (state, e) => {
      return { ...state, familleValue: e.target.value }
    }
  },
  effects: {
    getArticles: () => {
      fetch('http://localhost:4872/articles', {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          // "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*"
        },
      })
        .then(function (response) {
          console.log(response.json());
        })
        .then(function (myJson) {
          console.log(myJson);
        });
    }
  }
}