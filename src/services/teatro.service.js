import { TeatherModel } from "../models/teatro.model.js";

export const createTeather = async (name, lotChairs) => {
  try {
    if (name !== TeatherModel.findOne({ where: { name } })) {
      const newTeather = await TeatherModel.create({ name, lotChairs });
      return newTeather;
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
