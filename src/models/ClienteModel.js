import { DataTypes } from "sequelize";
import { sequelize } from "../config/postgres.js";

const Cliente = sequelize.define(

    'clientes',                                                 //clientes - igual esta no banco,
    { //definindo as colunas
        id: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        cpf: {
            type: DataTypes.STRING(14),
            allowNull: false,
            unique: true,
        },
        dataNascimento: {
            field: 'data_nascimento',   //vai nomear no banco.
            type: DataTypes.DATEONLY,

        }
    },
    {         //configuracoes 
        freezeTableName: true,  //colocar sempre pra n mudar os nomes
        timestamps: true,   //vai gerar uma "tabela de updates"
        createdAt: 'create_at',
        updatedAt: 'update_at',
    }

);

export default Cliente;