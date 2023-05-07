import { ButacaModel } from "../models/butaca.model.js";
import { PlateaModel } from "../models/platea.model.js";
import { BalconModel } from "../models/balcon.model.js";

export const createButacaBalcon = async (idButaca, sold, smokers) => {
  try {
    const newButaca = await ButacaModel.create({ idButaca, sold });
    const newBalcon = await BalconModel.create({ smokers, idButaca });
    return newButaca;
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createButacaPlatea = async (idButaca, sold, protocol) => {
  try {
    const newButaca = await ButacaModel.create({ idButaca, sold });
    const newPlatea = await PlateaModel.create({ protocol });
    return newButaca;
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const saleButacaBalcon = async (idButaca, numBalcon) => {
  try {
    let price = numBalcon * 0.5;
    const butaca = await ButacaModel.findByPk(idButaca);
    const balcon = await BalconModel.findByPk(idButaca);

    if (butaca.idButaca == balcon.idButaca) {
      if (balcon.smokers) {
        price += 5;
        butaca.sold = true;
        return price;
      }
    }
    return price;
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const saleButacaPlatea = async (idButaca) => {
  try {
    let price = 20;
    const butaca = await ButacaModel.findByPk(idButaca);
    const platea = await PlateaModel.findByPk(idButaca);

    if (butaca.idButaca == platea.idButaca) {
      if (platea.protocol) {
        price = 30;
        butaca.sold = true;
        return price;
      }
    }
    return price;
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const lotButacasSolds = async () => {
  try {
    let lot = 0;
    await ButacaModel.findAll().then((butacas) => {
      butacas.forEach((butacas) => {
        if (butacas.sold) {
          lot++;
        }
      });
    });
    return lot;
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const collectMoney = async () => {
  try {
    let collect = collectMoneyBalcons + collectMoneyPlateas;
    return collect;
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const collectMoneyBalcons = async () => {
  try {
    let money = 0;
    await BalconModel.findAll().then((balcon) => {
      balcon.forEach((balcon) => {
        money += parseInt(balcon.idButaca.subString(1)) * 0.5;
        if (balcon.smokers) {
          money += 5;
        }
      });
      return money;
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const collectMoneyPlateas = async () => {
  try {
    let money = 0;
    await PlateaModel.findAll().then((platea) => {
      platea.forEach((platea) => {
        if (platea.protocol) {
          money += 30;
        } else {
          money += 20;
        }
      });
      return money;
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const apportSmokers = async () => {
  try {
    let money = 0;
    await BalconModel.findAll().then((balcon) => {
      balcon.forEach((balcon) => {
        if (balcon.smokers) {
          money += parseInt(balcon.idButaca.subString(1)) * 0.5 + 5;
        }
      });
    });
    return money;
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
