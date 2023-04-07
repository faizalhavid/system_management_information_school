import { PrismaClient } from "@prisma/client";
const prisma =  PrismaClient();


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
        res.status(200).json(response);
    }catch(error){
        res.status(404).json({msg:error.message});
    }
}
export const create = (req,res) => {

}
export const store = (req,res) => {

}
export const update = (req,res) => {

}
export const drop = (req,res) => {

}
