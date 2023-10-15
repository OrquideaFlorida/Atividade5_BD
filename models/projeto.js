module.exports = (sequelize, DataTypes) => {
    const Projeto = sequelize.define('Projeto', {
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
    });
    return Projeto;
};