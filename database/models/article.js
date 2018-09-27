'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    code: DataTypes.STRING,
    designation: DataTypes.STRING,
    uMesure: DataTypes.STRING,
    quantite: DataTypes.DOUBLE,
    prixAchat: DataTypes.DOUBLE,
    prixDetail: DataTypes.DOUBLE
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};