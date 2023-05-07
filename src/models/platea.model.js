import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const PlateaModel = sequelize.define(
  "Platea",
  {
    protocol: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);
