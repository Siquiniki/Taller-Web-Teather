import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const BalconModel = sequelize.define(
  "Balcon",
  {
    smokers: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);
