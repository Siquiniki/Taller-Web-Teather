import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const TeatherModel = sequelize.define(
  "Teather",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lotChairs: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);
