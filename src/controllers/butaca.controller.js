import {
  createButacaBalcon,
  createButacaPlatea,
  getButacas,
  saleButacaBalcon,
  saleButacaPlatea,
  lotButacasSolds,
  collectMoney,
  apportSmokers,
} from "../services/butaca.service.js";

export const addButacaBalcon = async (req, res) => {
  try {
    const { idButaca, sold, smokers } = req.body;
    res.status(201).json(await createButacaBalcon(idButaca, sold, smokers));
  } catch (error) {
    res.status(400).json({ message: error.message });
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

export const listButacas = async (req, res) => {
  try {
    res.status(200).json(await getButacas());
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const saleButaca = async (req, res) => {
  try {
    const { type } = req.body;
    const { idButaca } = req.body;
    if (type == 0) {
      res.status(202).json(await saleButacaBalcon(idButaca));
    } else {
      res.status(202).json(await saleButacaPlatea(idButaca));
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const solds = async (req, res) => {
  try {
    res.status(200).json(await lotButacasSolds());
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const collected = async (req, res) => {
  try {
    res.status(200).json(await collectMoney());
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const apported = async (req, res) => {
  try {
    res.status(200).json(await apportSmokers());
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
