import { createTeather } from "../services/teatro.service.js";

export const addTheather = async (req, res) => {
  try {
    const { name, lotChairs } = req.body;
    res.status(201).json(await createTeather(name, lotChairs));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
