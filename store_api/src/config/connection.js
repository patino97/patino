require('dotenv').config({path: '../../.env'});

const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    process.env.DB_SCHEMA, 
    process.env.DB_USER, 
    process.env.DB_PASS, 
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);

try {
    sequelize.authenticate().then(() => {
    console.log('Sucesso')
    })
  } catch (error) {
    console.error('Falha:', error);
  }

  module.exports = function() {
    return sequelize;
  };