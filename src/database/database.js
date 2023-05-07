import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    "teatherDB", 
    "postgres", 
    "Hawkeye", 
    {
    host: "localhost",
    dialect: "postgres",
    }
);