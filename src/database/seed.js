import { sequelize } from "./database.js";
import { TeatherModel } from "../models/teatro.model.js";
import { ButacaModel } from "../models/butaca.model.js";
import { BalconModel } from "../models/balcon.model.js";
import { PlateaModel } from "../models/platea.model.js";

// Teatros

const teathers = [
    {name: "Alicia Alonzo", lotChairs: 1000},
    {name: "Abeyaneda", lotChairs: 1500},
    {name: "Nacional", lotChairs: 2500},
];

const butacas = [
    {idButaca: "A1", sold: false},
    {idButaca: "A2", sold: false},
    {idButaca: "A3", sold: false},
    {idButaca: "A4", sold: false},
    {idButaca: "A5", sold: false},
    {idButaca: "B1", sold: false},
    {idButaca: "B2", sold: false},
    {idButaca: "B3", sold: false},
    {idButaca: "B4", sold: false},
    {idButaca: "B5", sold: false},
    {idButaca: "C1", sold: false},
    {idButaca: "C2", sold: false},
    {idButaca: "C3", sold: false},
    {idButaca: "C4", sold: false},
    {idButaca: "C5", sold: false},
    {idButaca: "C6", sold: false},
    {idButaca: "C7", sold: false},
    {idButaca: "C8", sold: false},
    {idButaca: "C9", sold: false},
    {idButaca: "C10", sold: false},
];

// Butacas de platea
const butacasPlateas = [
    {protocol: true, idButaca: "A1"},
    {protocol: true, idButaca: "A2"},
    {protocol: true, idButaca: "A3"},
    {protocol: true, idButaca: "A4"},
    {protocol: true, idButaca: "A5"},
    {protocol: false, idButaca: "B1"},
    {protocol: false, idButaca: "B2"},
    {protocol: false, idButaca: "B3"},
    {protocol: false, idButaca: "B4"},
    {protocol: false, idButaca: "B5"},
];

// Butacas de balcon
const butacasBalcons = [
    {smokers: true, idButaca: "C1"},
    {smokers: true, idButaca: "C2"},
    {smokers: true, idButaca: "C3"},
    {smokers: true, idButaca: "C4"},
    {smokers: true, idButaca: "C5"},
    {smokers: false, idButaca: "C6"},
    {smokers: false, idButaca: "C7"},
    {smokers: false, idButaca: "C8"},
    {smokers: false, idButaca: "C9"},
    {smokers: false, idButaca: "C10"},
];

// export const seed = await sequelize.sync().then(() => {
//     console.log("Conexion establecida");
// }).then(() => {
//     teathers.forEach( (teather) => TeatherModel.create(teather) )
// }).then(() => {
//     butacas.forEach((butaca) => ButacaModel.create(butaca))
// }).then(() => {
//     butacasPlateas.forEach((butacaP) => PlateaModel.create(butacaP))
// }).then(() => {
//     butacasBalcons.forEach((butacaB) => BalconModel.create(butacaB))
// });