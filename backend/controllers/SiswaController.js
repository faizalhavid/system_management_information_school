import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export const index= async (req,res) => {
    try {
        const response = await prisma.siswa.findMany();
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg:error.message});
    }
}
export const show = async (req,res) => {
    try {
        const response = await prisma.siswa.findUnique({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(201).json(response);
    }catch(error){
        res.status(404).json({msg:error.message});
    }
}
export const create = async (req,res) => {
    const {name,age,address,birth,sex,no_parent} = req.body;
    try {
        const siswa = await prisma.siswa.create({
            data:{
                name:name,
                age:age,
                address:address,
                birth:birth,
                sex:sex,
                no_parent:no_parent
            }
        });
    }catch(error){
        res.status(400).json({msg: error.message});
    }

}
export const store = (req,res) => {

}
export const update = (req,res) => {

}
export const drop = (req,res) => {

}
