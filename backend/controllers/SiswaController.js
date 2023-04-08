import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const index = async (req, res) => {
  try {
    const response = await prisma.siswa.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const show = async (req, res) => {
  try {
    const response = await prisma.siswa.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
export const create = async (req, res) => {
  const { name, age, address, birth, sex, no_parent } = req.body;
  try {
    const siswa = await prisma.siswa.create({
      data: {
        name: name,
        age: age,
        address: address,
        birth: birth,
        sex: sex,
        no_parent: no_parent,
      },
    });
    res.status(201).json(siswa);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const update = async (req, res) => {
  const { name, age, address, birth, sex, no_parent } = req.body;
  try {
    const siswa = await prisma.siswa.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        name: name,
        age: age,
        address: address,
        birth: birth,
        sex: sex,
        no_parent: no_parent,
      },
    });
    
    res.status(200).json(siswa);
    res.send('succesful update data siswa :D');
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export const drop = async (req, res) => {
    try {
      const siswa = await prisma.siswa.delete({
        where: {
          id: Number(req.params.id),
        },
      });
      res.status(200).json(siswa);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
};
