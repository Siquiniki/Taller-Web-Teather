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

export const getButacas = async () => {
  try {
    const butacas = await ButacaModel.findAll();
    return butacas;
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const saleButacaBalcon = async (idButaca) => {
  try {
    const butaca = await ButacaModel.findByPk(idButaca);
    butaca.update({sold: true}, {
      where: {
        idButaca
      }
    });
    const balcon = await BalconModel.findOne({where:{idButaca}});
    let price = parseInt(idButaca.substring(1)) * 0.5;

    if (butaca.idButaca === balcon.idButaca) {
      if (balcon.smokers) {  
        return price += 5;
      } else{
        return price;
      }
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const saleButacaPlatea = async (idButaca) => {
  try {
    const butaca = await ButacaModel.findByPk(idButaca);
    butaca.update({sold: true}, {
      where: {
        idButaca
      }
    });

    const platea = await PlateaModel.findOne({where: {idButaca}});

    if (butaca.idButaca === platea.idButaca) {
      if (platea.protocol) {
        return 30;
      }else{
        return 20;
      }
    }
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
    let collect = await collectMoneyBalcons() + await collectMoneyPlateas();
    console.log(collect);
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
        money += parseInt(balcon.idButaca.substring(1)) * 0.5;
        if (balcon.smokers) {
          money += 5;
        }
      });
    });
    console.log(`Dinero recaudado de los balcones ${money}.`);
    return money;
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
    });
    console.log(`Dinero recaudado de las plateas ${money}.`);
    return money;
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
          money += (parseInt(balcon.idButaca.substring(1)) * 0.5) + 5;
        }
      });
    });
    return money;
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
