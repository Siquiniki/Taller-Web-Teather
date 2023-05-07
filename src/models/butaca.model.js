import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { PlateaModel } from "./platea.model.js";
import { BalconModel } from "./balcon.model.js";

export const ButacaModel = sequelize.define("Butaca", {
  idButaca: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  sold: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
},{
  timestamps: false
});

PlateaModel.belongsTo(ButacaModel, {
  foreignKey: "idButaca",
  sourceKey: "idButaca"
});

BalconModel.belongsTo(ButacaModel, {
  foreignKey: "idButaca",
  sourceKey: "idButaca"
});
