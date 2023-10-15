'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('Projeto', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    preco: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    descricao: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      alowNull: false,
      type: Sequelize.DATE
    }
  }, {
    timestamps: false
  });
},

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('Projeto')
  }
};
