const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('teste', 'root', 'Orquídea@root', {
    dialect: 'mysql',
    host: 'localhost',
    port: '3'});

    const Projeto = sequelize.define('Projeto', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primatyKey: true
        },
        nome: {
            type:DataTypes.STRING,
            allowNull: false
        },
        preco: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        timestamps: false
    });

module.exports = Projeto;