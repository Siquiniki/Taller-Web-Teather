import {
  createButacaBalcon,
  createButacaPlatea,
  saleButacaBalcon,
  saleButacaPlatea,
  lotButacasSolds,
  collectMoney,
  apportSmokers
} from "../services/butaca.service.js";

export const addButacaBalcon = async (req, res) => {
    try {
    const { idButaca, sold, smokers } = req.body;
    res.status(201).json(await createButacaBalcon(idButaca, sold, smokers));
  } catch (error) {
    res.status(400).json({ message: error.message});
  }
};

export const addButacaPlatea = async (req, res) => {
  try {
    const { idButaca, sold, protocol } = req.body;
    res.status(201).json(await createButacaPlatea(idButaca, sold, protocol));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const saleButaca = async (req, res) => {
  try {
    const {type} = req.body;
    if(type == 0){
      res.status(200).json(saleButacaBalcon);
    } else{
      res.status(200).json(saleButacaPlatea);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const solds = async () => {
  try {
    res.status(200).json(lotButacasSolds);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export const collected = async () => {
  try {
    res.status(200).json(collectMoney);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export const apported = async () => {
  try {
    res.status(200).json(apportSmokers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}