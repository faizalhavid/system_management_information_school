import express from "express";
import {
    index,
    show,
    create,
    update,
    drop
    
} from "../controllers/SiswaController.js";

const router = express.Router();
router.get('/siswa',index);
router.get('/siswa/:id',show);
router.post('/siswa',create);
router.patch('/siswa/:id',update);
router.delete('/siswa/:id',drop);

export default router;